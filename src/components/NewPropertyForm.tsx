import { useForm, SubmitHandler } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { addNewProperty } from "../api/realtor";
type FormValues = {
  title: string;
  description: string;
  type: string;
  price: number;
  location: string;
  images: File[];
};
const NewPropertyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    let formData: FormData;

    formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("type", data.type);
    formData.append("price", data.price.toString());
    formData.append("location", data.location);

    for (const key in data) {
      if (key === "images") {
        Array.from(data.images).forEach((file) => {
          formData.append("images", file);
        });
      }
    }



    try {
      await addNewProperty(formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-4 bg-white  h-screen rounded-lg ">
      <h1 className="text-2xl font-bold mb-4 font-serif ">Add New Property </h1>
      <form
        className="md:grid md:grid-cols-2 md:gap-10 pb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter property title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter property description"
            rows={3}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="type"
          >
            Type
          </label>
          <select
            id="type"
            {...register("type", { required: "Type is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
            <option value="appartment">Apartment</option>
            <option value="house">House</option>
            <option value="house">Commercial Space</option>
            <option value="villa">Land</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter price"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register("location", { required: "Location is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter location"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="images"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            {...register("images", {
              required: "Please upload at least one image",
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            accept="image/*"
            multiple
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-forestGreen w-full text-white py-2 px-4 rounded"
          >
            {isSubmitting || isLoading ? <FaSpinner /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPropertyForm;
