import React from "react";
const Card = (props) => {
    return (
        <div className="p-4 max-w-lg mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 flex flex-col justify-center items-center">
                {props.icon}
                <div className="mt-4">
                    <div className="font-bold text-2xl mb-2 text-center">{props.title}</div>
                    <p className="text-gray-700 text-base mt-2 text-center">
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;

