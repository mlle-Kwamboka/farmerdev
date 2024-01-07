/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Web5 } from "@web5/api/browser";
import React, { createContext, useEffect, useState } from "react";
import { publicDid } from "./constants";

export const Web5Context = createContext();

const ContextProvider = ({ children }) => {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState(null);
  const [userType, setUserType] = useState(null);
  const [specialistList, setSpecialistList] = useState([]);
  const [loadingSpecialist, setLoadingSpecialist] = useState(true);

  useEffect(() => {
    const connectWeb5 = async () => {
      try {
        console.log("Attempting to connect to Web5...");
        const { web5, did } = await Web5.connect();
        console.log("Web5 connected successfully:", web5);
        setWeb5(web5);
        setDid(did);
        console.log("did" + did);
      } catch (error) {
        console.error("Error Connecting to web5 : ", error);
      }
    };
    

    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
    connectWeb5();
  }, []);

  const setUserTypeAndRedirect = (type) => {
    localStorage.setItem("userType", type);
    setUserType(type);
  };

  const logout = () => {
    localStorage.removeItem("userType");
    setUserType("");
  };

  const schema = {
    context: "https://schema.org/",
    type: "Person",
    get uri() {
      return this.context + this.type;
    },
  };

  const protocolDefinition = {
    protocol: import.meta.env.VITE_PROTOCOL_URL,
    published: true,
    types: {
      users: {
        schema: `${schema.uri}/users`,
        dataFormats: ["application/json"],
      },
      farmerProfile: {
        schema: `${schema.uri}/farmerProfile`,
        dataFormats: ["application/json"],
      },
      specialistProfile: {
        schema: `${schema.uri}/specialistProfiles`,
        dataFormats: ["application/json"],
      },
      medicalRecords: {
        schema: `${schema.uri}/medicalRecord`,
        dataFormats: ["application/json"],
      },
      bookAppointment: {
        schema: `${schema.uri}/appointment`,
        dataFormats: ["application/json"],
      },
    },
    structure: {
      users: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "anyone", can: "read" },
        ],
      },
      medicalRecords: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "medicalRecords", can: "read" },
        ],
      },
      farmerProfile: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "farmerProfile", can: "read" },
        ],
      },
      specialistProfile: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "anyone", can: "read" },
        ],
      },
      bookAppointment: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "bookAppointment", can: "read" },
        ],
      },
    },
  };

  useEffect(() => {
    const installProtocol = async () => {
      try {
        console.log("Installing protocol ...");
        const { protocol, status } = await web5.dwn.protocols.configure({
          message: {
            definition: protocolDefinition,
          },
        });
        await protocol.send(did);
        console.log("Protocol installed successfully.");
      } catch (error) {
        console.error("Error installing protocol: : ", error);
      }
    };

    const fetchSpecialists = async () => {
      try {
        const response = await web5.dwn.records.query({
          from: publicDid,
          message: {
            filter: {
              protocol: protocolDefinition.protocol,
              schema: protocolDefinition.types.specialistProfile.schema,
            },
          },
        });

        if (response.status.code === 200) {
          const specialistProfile = await Promise.all(
            response.records.map(async (record) => {
              const data = await record.data.json();
              return {
                ...data,
                recordId: record.id,
              };
            })
          );
          setSpecialistList(specialistProfile);
          setLoadingSpecialist(false);
          return specialistProfile;
        } else {
          console.error("error fetching this profile", response.status);
          return [];
        }
      } catch (error) {
        console.error("error fetching specialist profile :", error);
      }
    };

    if (web5 && did) {
      installProtocol();
      fetchSpecialists();
    }
  }, [web5, did]);
  console.log(did)

  const value = {
    web5,
    did,
    userType,
    protocolDefinition,
    specialistList,
    loadingSpecialist,
    setUserTypeAndRedirect,
    logout,
  };

  return (
    <div>
      <Web5Context.Provider value={value}>{children}</Web5Context.Provider>
    </div>
  );
};

export default ContextProvider;
