import Carousel from "../components/CarouselBanner";
import { achivements, blogs, images, propertyTypes } from "../constants";
import SearchProperty from "../components/SearchProperty";
import PropertyTypes from "../components/PropertyTypes";
import AchievementsSection from "../components/AchievementsSection";
import PropertyCard from "../components/PropertyCard";
import { useEffect, useState } from "react";
import { IProperty } from "../interface";
import { getProperties } from "../api/common";
import useLocalStorage from "../hooks/useLocalStorage";
import RealtorStatisticCard from "../components/RealtorStatisticCard";
import AddPropertyButton from "../components/AddPropertyButton";

const Home = () => {
  const [property, setProperty] = useState<IProperty[] | null>(null);
  const { getData } = useLocalStorage();
  const role = getData("role");
  const getProperty = async () => {
    try {
      const response = await getProperties(4);

      if (response) {
        setProperty(response.property);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div className=" h-auto mb-20">
      {role === "buyer" ? (
        /////////////////// // BUYER HOME VIEW //////////////////////////
        <>
          <section className=" bg-cover bg-center bg-no-repeat w-full  rounded-md">
            <Carousel images={images} />
          </section>
          <SearchProperty />

          <section>
            <p className=" text-3xl md:text-5xl text-forestGreen font-bold text-left px-12">
              What We Offer!
            </p>

            <div className=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-auto w-full p-10 ">
              {propertyTypes.map((propertyTpe: any, i: number) => (
                <PropertyTypes
                  key={i}
                  image={propertyTpe.image}
                  type={propertyTpe.text}
                />
              ))}
            </div>
          </section>

          <p className=" mt-20 text-3xl md:text-5xl text-forestGreen font-bold text-left px-12">
            Top Listings!
          </p>

          <section className=" grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto  gap-5 h-96 w-full p-10 ">
            {property?.map((propertie: IProperty, i: number) => (
              <PropertyCard
                key={i}
                title={propertie.title}
                image={propertie.images}
                location={propertie.location}
                price={propertie.price}
              />
            ))}
          </section>

          <section className=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 h-96 w-full p-10 ">
            {achivements.map((achivement: any, i: number) => (
              <AchievementsSection
                key={i}
                text={achivement.text}
                count={achivement.count}
              />
            ))}
          </section>

          <p className=" mt-20 text-3xl md:text-5xl text-forestGreen font-bold text-left px-12">
            Latest Blogs!
          </p>
          <section className=" mt-5 p-5 md:px-10 rounded-lg bg-cover bg-center bg-no-repeat w-full ">
            <Carousel images={blogs} isBlog />
          </section>
        </>
      ) : (
        /////////////////// // REALTOR HOME VIEW //////////////////////////
        <>
          <section className=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 h-auto w-full p-10 ">
            <RealtorStatisticCard />
          </section>

          <p className=" mt-20 text-3xl md:text-5xl text-forestGreen font-bold text-left px-12">
            Active Listings!
          </p>

          <section className=" grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10  w-auto p-10 ">
            {property?.map((propertie: IProperty, i: number) => (
              <PropertyCard
                key={i}
                title={propertie.title}
                image={propertie.images}
                location={propertie.location}
                price={propertie.price}
              />
            ))}
          </section>

          <p className=" mt-20 text-3xl md:text-5xl text-forestGreen font-bold text-left px-12">
            Solded Listings!
          </p>

          <section className=" grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-5  w-full p-10 ">
            {property?.map((propertie: IProperty, i: number) => (
              <PropertyCard
                key={i}
                title={propertie.title}
                image={propertie.images}
                location={propertie.location}
                price={propertie.price}
                sold
              />
            ))}
          </section>
          <p className=" mt-20 text-3xl md:text-5xl text-forestGreen font-bold text-left px-12">
            Latest Blogs!
          </p>
          <section className=" mt-5 p-5 md:px-10 rounded-lg bg-cover bg-center bg-no-repeat w-full ">
            <Carousel images={blogs} isBlog />
          </section>

          <AddPropertyButton/>
        </>
      )}
    </div>
  );
};

export default Home;
