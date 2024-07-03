import axios from "axios";

/**
 * Defines the base API URL for making requests to the server.
 */
const API_URL = "http://localhost:5000"

export const getURL = async (url, primaryKeywords) => {
  console.log('URL API called');
  try {
    const response = await axios.get(
      `${API_URL}/api/optimize/main?url=${url}&primaryKeywords=${primaryKeywords}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
};

export const getTitle = async (url, primaryKeywords) => {
    console.log('Title API called');
  try {
    console.log('inside try block');
    const response = await axios.get(
      `${API_URL}/api/optimize/title?url=${url}&primaryKeywords=${primaryKeywords}`);
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
};

export const getMeta = async (url, primaryKeywords) => {
  console.log('Meta API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/meta?url=${url}&primaryKeywords=${primaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getNewH1 = async (url, primaryKeywords) => {
  console.log('New H1 API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/newH1?url=${url}&primaryKeywords=${primaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getH2 = async (url, secondaryKeywords) => {
  console.log('H2 API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/h2?url=${url}&secondaryKeywords=${secondaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getH3 = async (url, secondaryKeywords) => {
  console.log('H3 API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/h3?url=${url}&secondaryKeywords=${secondaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getH4 = async (url, secondaryKeywords) => {
  console.log('H4 API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/h4?url=${url}&secondaryKeywords=${secondaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getH5 = async (url, secondaryKeywords) => {
  console.log('H5 API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/h5?url=${url}&secondaryKeywords=${secondaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getH6 = async (url, secondaryKeywords) => {
  console.log('H6 API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/h6?url=${url}&secondaryKeywords=${secondaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getPara = async (url, primaryKeywords, secondaryKeywords) => {
  console.log('Paragraph API called');
  try {
      const response = await axios.get(
        `${API_URL}/api/optimize/para?url=${url}&primaryKeywords=${primaryKeywords}&secondaryKeywords=${secondaryKeywords}`);
      return response.data;
  } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
  }    
};

export const getImage = async (url) => {
  console.log('Image API called');
  try {
    const response = await axios.get(
      `${API_URL}/api/optimize/image?url=${url}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
};

export const getAnchor = async (url) => {
  console.log('Anchor API called');
  try {
    const response = await axios.get(
      `${API_URL}/api/optimize/anchor?url=${url}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
};

export const getLinks = async (url) => {
  console.log('Links API called');
  try {
    const response = await axios.get(
      `${API_URL}/api/optimize/address?url=${url}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
};
