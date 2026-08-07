import api from "../api/axios.js";

// Student assigned enrollments (admin provisioned)
export const getMyBatches = async () => {
  try {
    const response = await api.get("/student/enrollments");
    return response.data;
  } catch (error) {
    console.error("Error fetching student enrollments:", error);
    return [];
  }
};

export const getMyBatch = async () => {
  const data = await getMyBatches();
  return Array.isArray(data) ? data : [];
};

// Safe fallbacks for deprecated public/self-enroll calls (handled exclusively by Admin)
export const enrollBatch = async () => {
  return { message: "Program enrollments are provisioned by Administrators upon program registration." };
};

export const getAllBatches = async () => {
  return [];
};

export const getPublicBatches = async () => {
  return [];
};
