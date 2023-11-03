import { readFile, writeFile } from "fs/promises";

interface Appointment {
  id: number;
  author: string;
  start_date: string;
  end_date: string;
}

export const getAll = async (): Promise<Appointment[] | string> => {
  try {
    const buffer = await readFile("./src/appointments.json", {
      encoding: "utf-8",
    });
    return JSON.parse(buffer);
  } catch (error) {
    return "Error fetching data";
  }
};

export const getById = async (id: number): Promise<Appointment | string> => {
  try {
    const list = await getAll();
    if (typeof list != "string") {
      const single = list.find((booking) => booking.id === id);
      if (single) {
        return single;
      } else {
        throw new Error("Booking Not Found!");
      }
    } else {
      throw new Error(list);
    }
  } catch (error) {
    return error.toString();
  }
};

export const addBooking = async (appointment: Appointment) => {
  const list = await getAll();
  try {
    const list = await getAll();
    if (typeof list != "string") {
      await writeFile(
        "./src/appointments.json",
        JSON.stringify([...list, appointment], null, 2)
      );
    } else {
      throw new Error(list);
    }
  } catch (error) {
    return error.toString();
  }
};

export const removeById = async (id: number) => {
  try {
    const list = await getAll();

    if (typeof list != "string") {
      const updated = list.filter((booking) => booking.id !== id);
      await writeFile('./src/appointments.json', JSON.stringify(updated, null, 2))

    } else {
      throw new Error(list);
    }
  } catch (error) {
    return error.toString();
  }
};

export const updateBooking = async(appointment: Partial<Appointment>) => {
    if(!appointment.id){
        throw new Error("Appointment requires identifier")
    }

    const single = await getById(appointment.id)
    if(typeof single == 'string'){
        throw new Error(single)
    }

    const updated = {...single, ...appointment}
    await writeFile('./src/appointment.json', JSON.stringify(updated, null, 2))
}

