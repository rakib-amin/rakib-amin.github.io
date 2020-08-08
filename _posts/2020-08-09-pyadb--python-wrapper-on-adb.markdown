---
layout: post
title:  "PyADB : Python wrapper on ADB"
date:   2020-08-09 02:47:36 +0800
categories: android debug
---
I designed a wrapper for ADB in Python. See it in Action:

![](https://github.com/codefromkitchen/pyadb/raw/master/pyadb.gif)

Code Sample: 
<!--- Code Block -->
{% highlight Python %}
def list_devices():
    global ADB_COMMAND
    platform_system = platform.system()
    if platform_system == 'Windows':
        pwd = os.popen("cd").read().strip()
        ADB_COMMAND = WINDOWS_ADB.format(CURRENT_DIR=pwd) + 'adb.exe'
    elif platform_system == 'Darwin':
        os.popen('chmod 700 ' + MACOS_ADB + 'adb')
        ADB_COMMAND = MACOS_ADB + 'adb'
    elif platform_system == 'Linux':
        os.popen('chmod 700 ' + LINUX_ADB + 'adb')
        ADB_COMMAND = LINUX_ADB + 'adb'
    else:
        exit() 
    adb_devs = os.popen(ADB_COMMAND + " devices").read()
    serials = re.findall("[0-9A-Z]{6,20}", adb_devs)
    devices = []
    for sl in serials:
        model_ = os.popen(f'{ADB_COMMAND} -s {sl} shell getprop ro.product.model').read().strip()
        devices.append(sl + " " + model_)
    return devices
{% endhighlight %}
{% if page.content contains "pre" %}
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>
<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>
{% endif %}
