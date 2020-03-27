#! /bin/bash
apollo-codegen introspect-schema http://localhost:4000 --output schema.json
apollo-codegen generate src/**/*.tsx --schema schema.json --target ts  --output ./src/modules/RegisterController/__generated__/RegisterMutation.ts