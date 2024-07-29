import { task, types } from 'hardhat/config'

import { extractMastercopyArtifact } from 'zodiac-core'

import packageJson from '../package.json'

const AddressOne = '0x0000000000000000000000000000000000000001'

task(
  'mastercopy:extract',
  'Extracts current mastercopy build artifacts, and persists it'
)
  .addParam(
    'mastercopyVersion',
    'The extracted artifact version',
    undefined,
    types.string,
    true
  )
  .setAction(async (params) => {
    const version = params.mastercopyVersion || packageJson.version

    extractMastercopyArtifact({
      version,
      contractName: 'Delay',
      constructorArgs: {
        types: ['address', 'address', 'address', 'uint256', 'uint256'],
        values: [AddressOne, AddressOne, AddressOne, 0, 0],
      },
      salt: '0x0000000000000000000000000000000000000000000000000000000000000001',
    })
  })
