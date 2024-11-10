type CardDashboardProps = {
    title: string;
    value: number;
    color: string;
}

export const CardDashboard = ({ title, value, color }: CardDashboardProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col w-36 sm:w-48 md:w-80 lg:w-64 xl:w-72 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                <div className={`flex justify-center items-center ${color}`}>
                    <p className="text-white p-3 font-medium text-lg">
                        {title}
                    </p>
                </div>
                <p className="w-full text-center p-4 text-xl font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}

