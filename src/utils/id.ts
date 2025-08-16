// Generate a unique ID for messages
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
