#   Common Files


Specify your folder for common files in `common-files.config.js`. Then easily include files like:

. `.gitignore`


. `webpack.config.js`

. `.beblrc`

##  Install

`npm install common-files -g`

##  Setup

By Default common-files uses:

    C:/Users/{USER_NAME}/Documents/_includes/

Where **{USER_NAME}** is your Machine's name. If you wanna keep this folder then change only the **{USER_NAME}** in `commonFolder` in `common-files.config.js`

or

must change the `commonFolder` property all togather in `common-files.config.js` file to the absolute path of your custom **Common Folder**.

**NOTE** : `common-files.config.js` file will be located at:

    C:\Users\{USER_NAME}\AppData\Roaming\npm\node_modules\common-files



##  Usage:

You can immediately copy any file from your **Common Folder** to your CURRENT DIRECTORY. Just type:

`common-files {FILENAME}`

Where {FILENAME} is the name of the file. File `{FILENAME}` will be copied into your current directory.


####    Author: Shafiq Ahmad

NOTE: ( Only tested on Windows )
