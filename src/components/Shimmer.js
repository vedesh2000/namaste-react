const Shimmer = () => {
    return (
        <div className="flex flex-wrap">
            <div className="py-4 bg-red-300 dark:bg-gray-800 h-[50px] w-[100%]"></div>
            {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="m-4 p-4 w-[250px] h-[500px] bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse">
                    <div className="h-[275px] bg-gray-300 dark:bg-gray-600 mb-[25px]"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 mb-[25px]"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 mb-[25px]"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 mb-[25px]"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 mb-[25px]"></div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer;
