import { bufferToUtf8String, readInput, splitOnDoubleReturn, splitOnReturn } from '../shared'

type BucketWithSum = {
  bucket: string[]
  sum: number
}

export const getPart1Answer = (inputFilename: string) =>
  readInputToSortedBucketWithSumsDesc(inputFilename)
    // already sorted, just get the first element and return its sum
    .then(sortedBuckets => sortedBuckets[0]?.sum)

export const getPart2Answer = (inputFilename: string) =>
  readInputToSortedBucketWithSumsDesc(inputFilename)
    .then(sortedBuckets => sortedBuckets.slice(0, 3))
    .then(mergedBuckets => mergedBuckets.reduce((acc, curr) => acc + curr.sum, 0))

const readInputToSortedBucketWithSumsDesc = (inputFilename: string) =>
  readInput(inputFilename)
    .then(bufferToUtf8String)
    // segment into individual elves
    .then(splitOnDoubleReturn)
    // segment further into individual calorie lines for each elf
    .then(sArr => sArr.map(splitOnReturn))
    // calculate sum of inner string[] in place, converting matrix to array of more convenient BucketWithSum object
    .then(sMtx => sMtx.map(toBucketWithSum))
    .then(sortBySumDesc)

const toBucketWithSum = (bucket: string[]) => ({ bucket, sum: sumBucket(bucket) })

const sortBySumDesc = (sMtx: BucketWithSum[]) => sMtx.sort(sortHighestSumBucket)

const sumBucket = (bucket: string[]) =>
  bucket
    .filter(bucketContent => !Number.isNaN(Number.parseInt(bucketContent)))
    .reduce((acc, curr) => acc + Number.parseInt(curr), 0)

const sortHighestSumBucket = (sBucketSumA: BucketWithSum, sBucketSumB: BucketWithSum) =>
  sBucketSumB.sum - sBucketSumA.sum
