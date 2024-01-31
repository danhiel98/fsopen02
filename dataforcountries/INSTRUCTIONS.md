## How to set up the API Key
// For Linux/macOS Bash`
```bash
export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev
```

// For Windows PowerShell
```powershell
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) 
```

// For Windows cmd.exe
```cmd
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev 
```


## How to use the api key
```js
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startup
```
