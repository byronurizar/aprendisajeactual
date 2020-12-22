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
            setTimeout(() => {
                await driver.get("https://felav.c.sat.gob.gt/fel-web/privado/vistas/fel.jsf?Nit=79956882&amp;Clave=68d38ee533b2be52479802343fa326bf")
            }, 2000);
        }, 1000);
    }, 2000);


}

Prueba();
