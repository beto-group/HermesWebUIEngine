```datacorejsx
const activeFile = dc.resolvePath("HermesWebUIEngine") || "_RESOURCES/DATACORE/_DONE/HermesWebUIEngine/HermesWebUIEngine";
const folderPath = activeFile.substring(0, activeFile.lastIndexOf('/'));
const { View } = await dc.require(folderPath + "/src/index.jsx");
return await View({ folderPath, dc });
```
