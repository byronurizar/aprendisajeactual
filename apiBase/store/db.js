const Sequelize = require('sequelize');
const config = require('../config');

const confiBd = new Sequelize(
  config.bd.database,
  config.bd.username,
  config.bd.password,
  {
    host: config.bd.host,
    dialect: config.bd.dialect,
  }
);


const EstadoModel = require('./models/cat_estado');
const GeneroModel = require('./models/cat_genero');
const TipoSangreModel = require('./models/cat_tipo_sangre');
const EstadoCivilModel = require('./models/cat_estado_civil');
const TipoDocumentoModel = require('./models/cat_tipo_documento');
const TipoTelefonoModel = require('./models/cat_tipo_telefono');
const PaisModel = require('./models/cat_pais');
const DepartamentoModel = require('./models/cat_departamento');
const MunicipioModel = require('./models/cat_municipio');
const AccesoModel = require('./models/cat_acceso');
const MenuModel = require('./models/cat_menu');
const RolModel = require('./models/cat_rol');
const MenuAccesoModel = require('./models/menu_acceso');
const RolMenuAccesoModel = require('./models/rol_menu_acceso');
const TipoDatoModel = require('./models/cat_tipo_dato');
const BitacoraCambiosModel = require('./models/bitacora_cambios');
const BitacoraPeticionModel = require('./models/bitacora_peticion');
const PersonaModel = require('./models/persona');
const IdentificacionPersonaModel = require('./models/identificacion_persona');
const DireccionPersonaModel = require('./models/direccion_persona');
const DatoExtraPersonaModel = require('./models/dato_extra_persona');
const UsuarioModel = require('./models/usuario');
const UsuarioRolModel = require('./models/usuario_rol');
const FotoUsuarioModel = require('./models/foto_usuario');
const TelefonoPersonaModel = require('./models/telefono_persona');

const Estado = EstadoModel(confiBd, Sequelize);
const Genero = GeneroModel(confiBd, Sequelize);
const TipoSangre = TipoSangreModel(confiBd, Sequelize);
const EstadoCivil = EstadoCivilModel(confiBd, Sequelize);
const TipoDocumento = TipoDocumentoModel(confiBd, Sequelize);
const TipoTelefono = TipoTelefonoModel(confiBd, Sequelize);
const Pais = PaisModel(confiBd, Sequelize);
const Departamento = DepartamentoModel(confiBd, Sequelize);
const Municipio = MunicipioModel(confiBd, Sequelize);
const Acceso = AccesoModel(confiBd, Sequelize);
const Menu = MenuModel(confiBd, Sequelize);
const Rol = RolModel(confiBd, Sequelize);
const MenuAcceso = MenuAccesoModel(confiBd, Sequelize);
const RolMenuAcceso = RolMenuAccesoModel(confiBd, Sequelize);
const TipoDato = TipoDatoModel(confiBd, Sequelize);
const BitacoraCambios = BitacoraCambiosModel(confiBd, Sequelize);
const BitacoraPeticion = BitacoraPeticionModel(confiBd, Sequelize);
const Persona = PersonaModel(confiBd, Sequelize);
const IdentificacionPersona = IdentificacionPersonaModel(confiBd, Sequelize);
const DireccionPersona = DireccionPersonaModel(confiBd, Sequelize);
const DatoExtraPersona = DatoExtraPersonaModel(confiBd, Sequelize);
const Usuario = UsuarioModel(confiBd, Sequelize);
const UsuarioRol = UsuarioRolModel(confiBd, Sequelize);
const FotoUsuario = FotoUsuarioModel(confiBd, Sequelize);
const TelefonoPersona = TelefonoPersonaModel(confiBd, Sequelize);

try {
  confiBd.sync({
    force: false,
    logging: false, //Evitamos que nos muestre lo que hace con la bd
  }).then(() => {

  //   confiBd.query("SELECT * from cat_estado").then(results => {
  //     console.log(results);
  // });

  });
} catch (e) {
  console.error(e);
}


module.exports = {
  Estado,
  Genero,
  TipoSangre,
  EstadoCivil,
  TipoDocumento,
  TipoTelefono,
  Pais,
  Departamento,
  Municipio,
  Acceso,
  Menu,
  Rol,
  MenuAcceso,
  RolMenuAcceso,
  TipoDato,
  BitacoraCambios,
  BitacoraPeticion,
  Persona,
  IdentificacionPersona,
  DireccionPersona,
  DatoExtraPersona,
  Usuario,
  UsuarioRol,
  FotoUsuario,
  TelefonoPersona,
  bd:confiBd
}


