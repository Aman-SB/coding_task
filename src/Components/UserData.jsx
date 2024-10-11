/**
 * UserData Component
 *
 * This component fetches user data from an external API and displays it in a responsive card layout.
 * Each user card can be clicked to toggle the display of additional user information, such as address
 * and geolocation details.
 *
 * Data fetched from: https://fakestoreapi.com/users
 *
 * Usage:
 * ```jsx
 * <UserData />
 * ```
 */

import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function UserData() {
    // State to store fetched user data
    const [data, setData] = useState([]);

    // State to track loading state
    const [loading, setLoading] = useState(true);

    // State to store form validation errors
    const [error, setError] = useState(null);

    // State to track the selected user for expanded details
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        // Fetching user data from the API when the component mounts
        fetch("https://fakestoreapi.com/users") // Example API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            // Set fetched data to state
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
            // Log any errors
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty dependency array ensures this runs once on mount

    /**
     * handleCardClick
     *
     * Toggles the selected user for displaying detailed information.
     *
     * @param {Object} user - The user object that contains user information.
     */
    const handleCardClick = (user) => {
        setSelectedUser(selectedUser === user ? null : user);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {data?.map((user) => (
                <div
                    key={user.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handleCardClick(user)}
                >
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">
                            {user.name.firstname} {user.name.lastname}
                        </h2>
                        <p className="text-gray-600">
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p className="text-gray-600">
                            <strong>Username:</strong> {user.username}
                        </p>
                        <p className="text-gray-600">
                            <strong>Phone:</strong> {user.phone}
                        </p>
                    </div>
                    {selectedUser === user && (
                        <>
                            <div className="bg-gray-100 p-4">
                                <h3 className="font-semibold">Address:</h3>
                                <p>
                                    {user.address.number} {user.address.street},{" "}
                                    {user.address.city}
                                </p>
                                <p>{user.address.zipcode}</p>
                            </div>
                            <div className="bg-gray-100 p-4">
                                <h3 className="font-semibold">Geolocation:</h3>
                                <p>
                                    <strong>Latitude:</strong>{" "}
                                    {user.address.geolocation.lat}
                                </p>
                                <p>
                                    <strong>Longitude:</strong>{" "}
                                    {user.address.geolocation.long}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
