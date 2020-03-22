// init Metamask
await setProvider()
// fetch all properties
const properties = await fetchAllProperties()
this.posts = properties