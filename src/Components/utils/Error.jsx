/**
 * Error Component
 *
 * This component displays error messages in a user-friendly manner.
 *
 * Usage:
 * ```jsx
 * <Error message="Something went wrong!" />
 * ```
 *
 * Props:
 * - `message`: The error message to display.
 */

export default function Error(message) {
    return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mt-5">
            <strong>Error:</strong> {message}
        </div>
    );
}
