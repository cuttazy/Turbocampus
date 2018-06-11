# Turbocampus

To install this app:

```
- git clone https://github.com/cuttazy/Turbocampus
- cd Turbocampus
- ionic serve
```
and install all node modules (when "ionic serve" command is launched).

## Information
To use "materie" tab, The app needs cordova library. For this use mobile device to test or launch:

```
- ionic cordova emulate browser
```

## Api Configuration
Go to app/providers/turbo-campus-configuration and edit turbo-campus-configuration.ts file
```
this.apiRoot = "http://localhost/lms/public/api/"; 
```
in constructor method.