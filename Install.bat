@echo off
title Thunder X BY LUOCHENZHIMU

>NUL 2>&1 REG.exe query "HKU\S-1-5-19" || (
    ECHO SET UAC = CreateObject^("Shell.Application"^) > "%TEMP%\Getadmin.vbs"
    ECHO UAC.ShellExecute "%~f0", "%1", "", "runas", 1 >> "%TEMP%\Getadmin.vbs"
    "%TEMP%\Getadmin.vbs"
    DEL /f /q "%TEMP%\Getadmin.vbs" 2>NUL
    Exit /b
)

taskkill /f /im Thunder.exe >nul 2>nul
echo.
pushd %~dp0
echo 正在清理迅雷缓存文件
rd/s/q "%tmp%\Xunlei" >nul 2>nul
rd/s/q "%tmp%\Thunder" >nul 2>nul
rd/s/q "%tmp%\ThunderLiveUD" >nul 2>nul
rd/s/q "%tmp%\Thunder Network" >nul 2>nul
rd/s/q "%tmp%\Xmp" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Thunder Network" >nul 2>nul
rd/s/q "%AppData%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles(x86)%\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Pusher" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\XunLei" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\XunleiBHO" >nul 2>nul
rd/s/q "%UserProfile%\AppData\Roaming\thunderx" >nul 2>nul
rd/s/q "%UserProfile%\AppData\Roaming\迅雷" >nul 2>nul
rd/s/q "%UserProfile%\AppData\Roaming\XLGameBox" >nul 2>nul
rd/s/q "%UserProfile%\My Documents\Thunder" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network" >nul 2>nul
del /q "Program\stat.dat" >NUL 2>NUL 
del /q "Program\latest_thunder_stat.xml" >NUL  2>NUL 
rd /s /q "Program\resources\bin\TBC\Data" >nul 2>NUL
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Thunder Network" >nul 2>nul
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Documents\Thunder Network" >nul 2>nul
del/f/q "%AppData%\Microsoft\Windows\Libraries\迅雷下载.library-ms" >nul 2>nul
echo 正在注册安装迅雷X...
md "%AllUsersProfile%\Application Data\Thunder Network\tp_common_info.dat" >nul
if %errorlevel%==0 md  "%PUBLIC%\Thunder Network\tp_common_info.dat"
regsvr32 /s "BHO\UserAgent.dll" >nul 2>nul
regsvr32 /s "Program\np_tdieplat.dll" >nul 2>nul
regsvr32 /s "BHO\ThunderAgent10.1.0.1000.dll" >nul 2>nul
if exist "%WinDir%\SysWOW64" Regsvr32 /s "BHO\ThunderAgent649.5.62.2075.dll" >nul 2>nul
reg delete "HKCU\Software\Thunder Network" /f >nul 2>nul
md "%AllUsersProfile%\Application Data\Thunder Network\cid_store.dat" >nul 2>nul
md "%AllUsersProfile%\Application Data\Thunder Network\emule_upload_list.dat" >nul 2>nul
if %errorlevel%==0 (md "%PUBLIC%\Thunder Network\cid_store.dat"&md "%PUBLIC%\Thunder Network\emule_upload_list.dat")
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "dir" /d "%~dp0\" /f >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "Path" /d "%~dp0Program\Thunder.exe" /f >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "instdir" /d "%~dp0\" /f >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Thunder Network\ThunderOem\thunder_backwnd" /v "Version" /d "10.1.10.348" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "dir" /d "%~dp0\" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "Path" /d "%~dp0Program\Thunder.exe" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "instdir" /d "%~dp0\" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg add "HKLM\Software\Wow6432Node\Thunder Network\ThunderOem\thunder_backwnd" /v "Version" /d "10.1.10.348" /f >nul 2>nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\使用迅雷下载" /ve /d "%~dp0BHO\geturl.htm" /f >nul 2>nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\使用迅雷下载" /v "Contexts" /t REG_DWOrd /d "0x00000022" /f >nul 2>nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\使用迅雷下载全部链接" /ve /d "%~dp0BHO\getAllurl.htm" /f >nul
reg add "HKCU\Software\Microsoft\Internet Explorer\MenuExt\使用迅雷下载全部链接" /v "Contexts" /t REG_DWOrd /d "0x000000f3" /f >nul 2>nul
reg add "HKCR\Xunlei.Bittorrent.6\DefaultIcon" /ve /d "%~dp0Program\TorrentFile.ico" /F >nul 2>nul
reg add "HKCR\Xunlei.Bittorrent.6\Shell\Open" /ve /d "使用迅雷下载该BT文件" /F >nul 2>nul
reg add "HKCR\Xunlei.Bittorrent.6\Shell\Open\command" /ve /d "%~dp0Program\Thunder.exe %%1" /F >nul 2>nul
reg add "HKCR\Xunlei.LSTFile.6\DefaultIcon" /ve /d "%~dp0Program\XLDownloadList.ico" /F >nul 2>nul
reg add "HKCR\Xunlei.LSTFile.6\Shell\Open" /ve /d "使用迅雷下载该任务列表文件" /F >nul 2>nul
reg add "HKCR\Xunlei.LSTFile.6\Shell\Open\command" /ve /d "%~dp0Program\Thunder.exe %%1" /F >nul 2>nul
reg add "HKCR\Xunlei.TDFile.6\DefaultIcon" /ve /d "%~dp0Program\XLTempFile.ico" /F >nul 2>nul
reg add "HKCR\Xunlei.TDFile.6\Shell\Open" /ve /d "使用迅雷下载未完成文件" /F >nul 2>nul
reg add "HKCR\Xunlei.TDFile.6\Shell\Open\command" /ve /d "%~dp0Program\Thunder.exe %%1" /F >nul 2>nul
reg add "HKCR\.xltd" /ve /d "Xunlei.TDFile.6" /F >nul 2>nul
reg add "HKCR\.torrent" /ve /d "Xunlei.Bittorrent.6" /F >nul 2>nul
reg add "HKCR\.downlist" /ve /d "Xunlei.LSTFile.6" /F >nul 2>nul
reg Add "HKLM\Software\Google\Chrome\NativeMessagingHosts\com.xunlei.thunder" /f /ve /d "%~dp0Program\com.xunlei.thunder.json" >nul 2>nul
if not exist "%WinDir%\SysWOW64" reg Add "HKLM\SOFTWARE\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /v "path" /d "%~dp0BHO\npxunlei.dll" /f >nul 2>nul
if exist "%WinDir%\SysWOW64" reg Add "HKLM\SOFTWARE\Wow6432Node\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /v "Path" /d "%~dp0BHO\npxunlei.dll" /f >nul 2>nul
echo 操作完成，欢迎使用迅雷X！
echo.
pause