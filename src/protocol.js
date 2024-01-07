export const protocolDefinition = {
  "protocol": "http://localhost:5173",
  "published": true,
  "types": {
    "farmerProfile": {
      "schema": "http://localhost:5173/farmerProfile",
      "dataFormats": ["application/json"]
    },
    "specialistProfile": {
      "schema": "http://localhost:5173/specialistProfile",
      "dataFormats": ["application/json"]
    },
    "medicalRecords": {
      "schema": "http://localhost:5173/medicalRecords",
      "dataFormats": ["application/json"]
    }
  },
  "structure": {
    "medicalRecords": {
      "$actions": [
        { "who": "anyone", "can": "write" },
        { "who": "recipient", "of": "medicalRecords", "can": "read" }
      ]
    },
    "farmerProfile": {
      "$actions": [
        { "who": "anyone", "can": "write" },
        { "who": "recipient", "of": "farmerProfile", "can": "read" }
      ]
    },
    "specialistProfile": {
      "$actions": [
        { "who": "anyone", "can": "write" },
        { "who": "anyone", "can": "read" }
      ]
    }
  }
}