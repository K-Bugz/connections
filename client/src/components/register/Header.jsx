import { Link } from 'react-router-dom';
import logo from '../../assets/connectedPurple.png';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="min-h-min flex bg-gray-bg1">
            <div className="w-full max-w-md m-auto   ">
                <div className="mb-10">
                    <div className="flex justify-center">
                        <img
                            alt=""
                            className="h-20 w-100"
                            src={logo} />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {heading}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                        {paragraph} {' '}
                        <Link to={linkUrl} className="font-medium text-blue-600 hover:text-blue-500">
                            {linkName}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}