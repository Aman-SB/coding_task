const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 gap-5">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;
