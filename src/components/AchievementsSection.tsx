import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'
import CountUp from 'react-countup';

type AchievementsSectionProp={

    text:string;
    count:number
}
const AchievementsSection = ({text,count}:AchievementsSectionProp) => {
  return (
    <Stat>
      <StatNumber className='text-center text-gray-600 text-2xl font-semibold'><CountUp end={count} duration={5}/>+</StatNumber>
      <StatLabel className='text-center text-gray-600 text-2xl font-bold mt-3 font-serif'>{text}</StatLabel>
    </Stat>
  );
}

export default AchievementsSection
