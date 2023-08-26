import './App.css';
import './styles/Homepage.css';

// function App() {
//     const [projectNameValue, setProjectName] = useState(
//         "Proposal Name"
//       );
//       const [descriptionValue, setDescription] = useState(
//         "Proposal description"
//       );
//       const [repoURLValue, setRepoURL] = useState(
//         "Project Github repo url"
//       );
      
//       const handleProjectNameValueChange = (event) => {
//         setProjectName(event.target.value);
//       };
//       const handleDescriptionValueChange = (event) => {
//         setDescription(event.target.value);
//       };
//       const handleRepoURLValueChange = (event) => {
//         setRepoURL(event.target.value);
//       };
      
//   return (
//       <body>
//         <div className="container">
//         <div className="col-xs-12">
//           {/* export these styles */}
//                 <div className="home-text-padding">
//                     <h2 className="home-text">Create links</h2>

//                     <a href='./'>
//                       <button>
//                       Get Started
//                       </button>
//                     </a>
//                 </div>
//         </div>
//         </div>
//       </body>
//   );
// }

// export default App;

const Create = () => {
  
    const queryParams = new URLSearchParams(window.location.search)
    const projectAddress = queryParams.get("projectAddress");
  
    const [projectNameValue, setProjectName] = useState(
      "Proposal Name"
    );
    const [descriptionValue, setDescription] = useState(
      "Proposal description"
    );
    const [repoURLValue, setRepoURL] = useState(
      "Project Github repo url"
    );
    
    const handleProjectNameValueChange = (event) => {
      setProjectName(event.target.value);
    };
    const handleDescriptionValueChange = (event) => {
      setDescription(event.target.value);
    };
    const handleRepoURLValueChange = (event) => {
      setRepoURL(event.target.value);
    };
    return (
      <div>
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-3xl  text-black mt-4">
            Submit a proposal 📤
          </h1>
        </div>
        <div className="card lg:card-side bg-white border-[2px] border-[#f2dbd0] ml-12 mr-12 rounded-2xl">
          {/* give the whole card some spacing and padding */}
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">proposal Name</span>
              </label>
              <input
                id="proposalName"
                type="text"
                className="input input-bordered"
                value={projectNameValue}
                onChange={handleProjectNameValueChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                id="description"
                type="text"
                className="input input-bordered"
                value={descriptionValue}
                onChange={handleDescriptionValueChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Repo URL</span>
              </label>
              <input
                id="repoURL"
                type="url"
                className="input input-bordered"
                value={repoURLValue}
                onChange={handleRepoURLValueChange}
              />
            </div>
            <div className="form-control mt-6">
              <button
                //   onClick={async () => {
                //     try {
                //       toast("Creating Proposal...");
                //       await createProposal(
                //         provider,
                //         signer,
                //         projectAddress,
                //         projectNameValue,
                //         repoURLValue,
                //         descriptionValue
                //       );
                //       // console.log(                      provider,
                //       //   signer,
                //       //   projectAddress,
                //       //   projectNameValue,
                //       //   repoURLValue,
                //       //   descriptionValue);               
                //     } catch (error) {
                //       toast.error("Failed to create project because of " + error.message);
                //     }
                //   }}
                className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto  text-center"
              >
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                <span className="relative text-black text-center">
                  Submit Proposal
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Create;