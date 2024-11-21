"use client";

function User(props) {
    const { user, deleteUser } = props;
    const removeUser = () => {
        deleteUser(user.id);
    }
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-500 h-32"></div>
            <div className="p-4 -mt-16">
                <div className="text-center">
                    <img className="h-24 w-24 rounded-full border-4 border-white mx-auto" src="https://via.placeholder.com/150" alt="User avatar" />
                    <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.company.name}</p>
                    <p className="text-gray-600">{user.username}</p>
                </div>
                <div className="mt-4 flex justify-center space-x-3">
                    <button className="text-sky-50 hover:text-sky-100 bg-red-600 px-3 py-2 rounded" onClick={removeUser}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;