import { getPart1Answer, getPart2Answer } from './days/one'

const elfCalorieFilename = 'elfCalories.txt'

const generateLogStatement = (day: number, part: number, answer: any) => `Day ${day} part ${part} answer: ${answer}`

const run = async () => {
  console.log(generateLogStatement(1, 1, await getPart1Answer(elfCalorieFilename)))
  console.log(generateLogStatement(1, 2, await getPart2Answer(elfCalorieFilename)))
}

run()
