const { Builder, By, Key, until } = require('selenium-webdriver');

const Prueba = async () => {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://portal.sat.gob.gt/portal/");
    await driver.findElement(By.name("login")).sendKeys("", Key.END);
    await driver.findElement(By.name("password")).sendKeys("", Key.ENTER);
    setTimeout(async () => {
        await driver.get("https://farm3.sat.gob.gt/menu/login.jsp");
    }, 1000);

    setTimeout(async () => {
        await driver.get("https://farm3.sat.gob.gt/menu/menuAplicacion.jsp?nombreApp=AgenciaVirtual&pllamada=1");
        setTimeout(async () => {
            await (await driver.findElement(By.className("ThemeOffice2003MainItemText"))).click();
            let itemLi = await driver.findElement(By.css(".lista1 > li"));
            console.log({ itemLi })
            for (let item of itemLi) {
                console.log("valor", item);
                console.log("texto", item.item.Gettext())
            }
        }, 1000);

    }, 2000);


}

Prueba();
