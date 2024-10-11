/**
 * Loading Component
 *
 * This component displays a spinner animation with a "Loading..." message.
 * It is used during the loading state when data is being fetched or processed.
 *
 * The spinner is styled with Tailwind CSS classes, including:
 * - `animate-spin`: Adds a spinning animation to the spinner.
 * - `border-4`, `border-blue-500`, `border-t-transparent`: Creates the circular border and transparent top for the spinner effect.
 * - `flex`, `items-center`, `justify-center`: Centers the content on the screen.
 *
 * @returns {JSX.Element} The loading spinner and message.
 * ```
 */
const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 gap-5">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;
