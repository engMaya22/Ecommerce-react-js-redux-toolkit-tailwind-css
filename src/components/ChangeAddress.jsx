import { useState } from "react";

const ChangeAddress = ({ setIsModalOpen, setAddress }) => {
  const [newAddress, setNewAddress] = useState("");
  const [error, setError] = useState("");

  const onClose = () => {
    if (!newAddress.trim()) {
      setError("Address is required.");
      return;
    }
    setError("");
    setAddress(newAddress);
    setIsModalOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="w-full p-2 mb-2 border"
        value={newAddress}
        onChange={(e) => {
          setNewAddress(e.target.value);
          setError(""); // clear error on typing
        }}
      />
      {error && <p className="mb-2 text-sm text-red-600">{error}</p>}
      <div className="flex justify-end">
        <button
          className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
