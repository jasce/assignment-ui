# Assignment-Ui

### Installation/Usage

- Clone the repo.
- cd repo
- nvm use ```Make sure to use node >= 10.13.0```.
- Run ```yarn or npm install``` to install dependencies.
- Run ``` npm start ``` to start the dev server.
- Use ``` npm run build ``` command to create a build with no unnecessary code.


### Test Cases

|Description | Execution steps | Expected output|
|--- | --- | ---|
|Localization |Select German language from Language selector dropdown | Header data, Tabs, Modals, Button text should be shown in german|
|Campaign Date change | Select today's date in Past Campaign tab for any campaign | The campaign should be removed from Past campaign tab and appear in Live Campaign tab|
|Pricing Modal | Select Pricing Option from any Campaign | The pricing modal must be visible with the campaign data|
|No Campaign Data | Remove all campaigns from either of the tab using schedule functionality | No Campaign!! text must be shown |
|Right Tab must be selected | Select any tabs from tab menu | Selected tab must get highlighted|

##### Note: LocalStorage has been used to store the Campaign Data.

