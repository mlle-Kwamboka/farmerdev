/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Web5Context } from "../../utils/Web5Context";
import { publicDid } from "../../utils/constants";

export default function SpecialistsForm({ userType, closeModal }) {
  const {
    web5,
    did,
    setUserType,
    protocolDefinition,
    setUserTypeAndRedirect,
  } = useContext(Web5Context);

  const [formState, setFormState] = useState({
    name: "",
    speciality: "",
    experience: "",
    did: did,
    location: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const createSpecialist = async () => {
    try {
      const { record, status } = await web5.dwn.records.write({
        data: { ...formState },
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "specialistProfile",
          schema: protocolDefinition.types.specialistProfile.schema,
          recipient: did,
          published: true,
        },
      });

      const DIDs = [did, publicDid];
      await Promise.all(
        DIDs.map(async (did) => {
          await record.send(did);
        })
      );
    } catch (error) {
      console.error("Error Creating specialist data : ", error);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormState({
          ...formState,
          location: `${latitude}, ${longitude}`,
          
        });
        console.log(location);
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  };

  const formSubmit = (e) => {
    e.preventDefault();
    getCurrentLocation(); 
    createSpecialist().finally(() => {
      setUserTypeAndRedirect("specialist");
      closeModal();
    });
  };
  return (
    <div className="w-full">
      <p className="text-lg font-normal text-black ">
        Enter your details below {userType}
      </p>
      <form className="pt-[60px]" onSubmit={formSubmit}>
        <div className="flex flex-col gap-[17px] pb-7">
          <label htmlFor="name" className="text-lg font-normal text-black ">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400 "
          />
        </div>
        <div className="flex flex-col gap-[17px] pb-7">
          <label
            htmlFor="speciality"
            className="text-lg font-normal text-black "
          >
            Speciality
          </label>
          <input
            type="text"
            id="speciality"
            name="speciality"
            required
            value={formState.speciality}
            onChange={handleChange}
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-[17px] pb-8">
          <label
            htmlFor="experience"
            className="text-lg font-normal text-black "
          >
            Years of Experience
          </label>
          <input
            id="experience"
            name="experience"
            type="number"
            required
            value={formState.experience}
            onChange={handleChange}
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-[17px] pb-7">
          <label htmlFor="location" className="text-lg font-normal text-black ">
            Location
          </label>
          <input
            id="location"
            type="text"
            required
            name="location"
            value={formState.location}
            readOnly
            className="w-[410px] h-[53px] px-5 bg-white rounded-2xl border border-sky-400 "
          />
        </div>

        <button
          className="w-[93px] h-[38px] bg-sky-400 rounded-[100px] disabled:bg-black/40 disabled:cursor-not-allowed hover:bg-sky-300 duration-300 transition-colors ease-in-out"
          disabled={
            formState.name === "" ||
            formState.experience === "" ||
            formState.speciality === ""
          }
        >
          Connect
        </button>
      </form>
    </div>
  );
}
