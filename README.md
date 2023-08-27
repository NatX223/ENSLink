# README.md
![Alt text](https://github.com/NatX223/ENSLink/blob/main/WhatsApp%20Image%202023-08-26%20at%203.06.29%20PM.jpeg)
# ENSLink

  

## Project Description

The rapid proliferation of online platforms and the increasing significance of digital identities have spurred the need for innovative solutions that simplify and amplify individuals' online presence. Our project is centered around seamlessly harmonizing Ethereum Name Service (ENS) names with personalized linktree-style webpages, creating an ingenious synergy that empowers users to curate, communicate, and consolidate their digital personas effortlessly. By harnessing the robust capabilities of ENS in conjunction with the user-friendly appeal of linktree profiles, we offer a dynamic solution that not only elevates personal branding but also introduces a new layer of trust and authenticity to the online ecosystem.
## Deployed App


Public URL: 





  

    
### Frontend Layer
The frontend layer is a [next](https://nestjs.com/) based web app that permits the following actions for a user:
1. Login to application via their wallet.
2. View latest blog post.
3. Create and Mint article as NFT's.



## Project Structure
#### Smart Contracts (including deployment, test scripts and NFT assets):
```
project-root/
│
├── components/
│   ├── Header.js
│   ├── LinktreeForm.js
│   ├── Linktree.js
│   └── ...
│
├── pages/
│   ├── index.js           # Main page with the linktree form
│   ├── linktree/[ensName].js  # Dynamic route for displaying linktree
│   └── ...
│
├── services/
│   ├── ensService.js      # ENS integration service using Ethers.js
│   ├── firebaseService.js # Firebase integration service
│   └── ...
│
├── utils/
│   ├── api.js             # API utility functions
│   └── ...
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── ...
│
├── package.json
├── README.md
└── ...

```
## Local Setup
Project was built and tested against:
* Node v19.7.0
* Npm v9.5.0

* **Ensure dotenv is setup with team 4 keys/signers** 


	
#### **Frontend:**
 - Cd to the **frontend** directory.
 - Run ``npm install``
 - Once install is complete:
	 * To start, run: 
	 ``npm run dev``
# or
``yarn dev``
# or
``pnpm dev``
- App will be accessible via http://localhost:3000/

## Team:

Built for the [Encode University Hackathon](https://www.encode.club/university-hackathon) by: [Ajuzie Sinachi Chinaza](https://twitter.com/NatX_eth) & [Mercy Boma](https://twitter.com/naps_thelma)
