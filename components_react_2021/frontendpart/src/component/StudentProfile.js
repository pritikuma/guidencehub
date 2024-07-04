import React,{useEffect,useState} from  'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faHandHoldingHand, faGear, faArrowRightFromBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';

const StudentProfile = () => {
    const [name, setName] = useState('chosdon');
    const [email, setEmail] = useState('rig123@zis.com');
  const [institute, setInstitute] = useState('IIT Guwahati');
  const [username, setUsername] = useState('rigz');
  const [std, setStd] = useState('10th');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('ProfileApi,js');
        const userData = response.data; // Assuming your API returns an object with user 
        setName(userData.name);
        setEmail(userData.email);
        setInstitute(userData.institution);
        setUsername(userData.username);
        setStd(userData.standard);
      } 
      catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      {/* Blue header */}
      <div className="w-full h-20 bg-blue-500 fixed top-0 z-50"></div>

      <div className="panel flex w-full bg-white">
        {/* Narrow Left Panel */}
        <div className="w-1/4 fixed top-20 h-full bg-blue-300  ">
            <div className="h-full w-60 bg-transparent pt-24 relative left-11 right-0 flex flex-col">
              <div className="flex justify-center items-center h-10 rounded-lg bg-gray-300 mb-6 hover:bg-gray-400">
                <FontAwesomeIcon icon={faHouse} className="text-2xl" />
                <div className="pl-5 text-xl">Home</div>
              </div>
              <div className="flex justify-center items-center h-10 rounded-lg bg-gray-300 mb-6 hover:bg-gray-400">
                <FontAwesomeIcon icon={faUserRegular} className="text-2xl" />
                <div className="pl-5 text-xl">Profile Edit</div>
              </div>
              <div className="flex justify-center items-center h-10 rounded-lg bg-gray-300 mb-6 hover:bg-gray-400">
                <FontAwesomeIcon icon={faHandHoldingHand} className="text-2xl" />
                <div className="pl-5 text-xl">Mentor</div>
              </div>
              <div className="flex justify-center items-center h-10 rounded-lg bg-gray-300 mb-6 hover:bg-gray-400">
                <FontAwesomeIcon icon={faGear} className="text-2xl" />
                <div className="pl-5 text-xl">Setting</div>
              </div>
              <div className="flex justify-center items-center h-10 rounded-lg bg-gray-300 mb-6 hover:bg-gray-400">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl" />
                <div className="pl-5 text-xl">Log Out</div>
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* Wide Left Panel with Navigation */}
        <div className="relative left-1/4 w-3/4 pt-20 pl-4 pr-4 " style={{ height: '1000px' }}>
          <div className="bg-pink-600 w-4/5 rounded-2xl shadow-lg mt-10 flex items-start p-6 relative left-20">
            <div className="w-72">
              <div className="w-52 h-52 mt-8 mx-auto relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v3ZFuC7uYQ9B-y0B3FZ00wOZUpfeozYhSeLXIlOBzkYSXEaEnV8JKlgMtVU1MmQb6Hs&usqp=CAU"
                  className="h-52 w-52 rounded-full"
                  alt="Profile"
                />
                <div className="absolute bottom-2 right-2 transform translate-x-1/2 -translate-y-1/2 scale-75">
                  <input type="file" id="file" className="hidden" />
                  <label htmlFor="file" className="bg-gray-800 text-white p-4 text-xl rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-600">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </label>
                </div>
              </div>
              <div className="mt-4 text-center text-2xl">{name}</div>
            </div>

            <div className="border-l border-white ml-12 mr-8 my-6 h-auto"></div>

            <div className="flex flex-col w-3/4">
              <div className="flex justify-end">
                <button className="bg-yellow-400 text-lg rounded-lg px-4 py-2 hover:bg-yellow-500">Edit Profile</button>
              </div>
              <div className="mt-8 space-y-6">
                <div>
                  <span className="text-lg">Institution: </span>
                  <span className="text-xl">{institute}</span>
                </div>
                <div>
                  <span className="text-lg">Email: </span>
                  <span className="text-xl">{email}</span>
                </div>
                <div>
                  <span className="text-lg">Class: </span>
                  <span className="text-xl">{std}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar section */}
          <div className="bg-pink-600 w-4/5 rounded-2xl shadow-lg mt-10 flex items-start p-6 relative left-20 bt-16 h-96">
            {/* Calendar content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
