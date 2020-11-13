const Sequelize = require('sequelize');
const config = require('../config');
const { QueryTypes } = require('sequelize');


const confiBd = new Sequelize(
  config.bd.database,
  config.bd.username,
  config.bd.password,
  {
    host: config.bd.host,
    dialect: config.bd.dialect,
    port: config.bd.port,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: false, //Evitamos que nos muestre lo que hace con la bd
     timezone: "-06:00",
  }
);


const EstadoModel = require('./models/base/cat_estado');
const GeneroModel = require('./models/base/cat_genero');
const TipoSangreModel = require('./models/base/cat_tipo_sangre');
const EstadoCivilModel = require('./models/base/cat_estado_civil');
const TipoDocumentoModel = require('./models/base/cat_tipo_documento');
const TipoTelefonoModel = require('./models/base/cat_tipo_telefono');
const PaisModel = require('./models/base/cat_pais');
const DepartamentoModel = require('./models/base/cat_departamento');
const MunicipioModel = require('./models/base/cat_municipio');
const AccesoModel = require('./models/base/cat_acceso');
const MenuModel = require('./models/base/cat_menu');
const RolModel = require('./models/base/cat_rol');
const MenuAccesoModel = require('./models/base/menu_acceso');
const RolMenuAccesoModel = require('./models/base/rol_menu_acceso');
const BitacoraCambiosModel = require('./models/base/bitacora_cambios');
const BitacoraPeticionModel = require('./models/base/bitacora_peticion');
const PersonaModel = require('./models/base/persona');
const IdentificacionPersonaModel = require('./models/base/identificacion_persona');
const DireccionPersonaModel = require('./models/base/direccion_persona');
const DatoExtraPersonaModel = require('./models/base/dato_extra_persona');
const UsuarioModel = require('./models/base/usuario');
const UsuarioRolModel = require('./models/base/usuario_rol');
const FotoUsuarioModel = require('./models/base/foto_usuario');
const TelefonoPersonaModel = require('./models/base/telefono_persona');
const ResetPassWordModel = require('./models/base/reset_password');
const ParametroModel = require('./models/base/cat_parametro');

//Inicio Colegio
const CarreraModel=require('./models/colegio/cat_carrera');
const GradoModel=require('./models/colegio/cat_grado');
const PensumModel=require('./models/colegio/cat_pensum');
const SeccionModel=require('./models/colegio/cat_seccion');
const CursoModel=require('./models/colegio/cat_curso');
const SalonModel=require('./models/colegio/cat_salon');
const HorarioModel=require('./models/colegio/cat_horario');
const CicloEscolarModel=require('./models/colegio/cat_ciclo_escolar');
const CarreraPensumModel=require('./models/colegio/carrera_pensum');
const PensumCursoModel=require('./models/colegio/pensum_curso');
const GradoSeccionModel=require('./models/colegio/grado_seccion');
const InscripcionModel=require('./models/colegio/inscripcion');
const InscripcionDetalleModel=require('./models/colegio/inscripcion_detalle');
const ConfiguracionCursoModel=require('./models/colegio/configuracion_curso');
//Fin Colegio


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
const ResetPassWord = ResetPassWordModel(confiBd, Sequelize);
const Parametro = ParametroModel(confiBd, Sequelize);

//Inicio Colegio
const Carrera=CarreraModel(confiBd, Sequelize);
const Grado=GradoModel(confiBd, Sequelize);
const Pensum=PensumModel(confiBd, Sequelize);
const Seccion=SeccionModel(confiBd, Sequelize);
const Curso=CursoModel(confiBd, Sequelize);
const Salon=SalonModel(confiBd, Sequelize);
const Horario=HorarioModel(confiBd, Sequelize);
const CicloEscolar=CicloEscolarModel(confiBd, Sequelize);
const CarreraPensum=CarreraPensumModel(confiBd, Sequelize);
const PensumCurso=PensumCursoModel(confiBd, Sequelize);
const GradoSeccion=GradoSeccionModel(confiBd, Sequelize);
const Inscripcion=InscripcionModel(confiBd, Sequelize);
const InscripcionDetalle=InscripcionDetalleModel(confiBd, Sequelize);
const ConfiguracionCurso=ConfiguracionCursoModel(confiBd, Sequelize);
//Fin Colegio
EstadoCivil.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Pais.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Departamento.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Departamento.belongsTo(Pais,{
  as: "Pais",
  foreignKey: "paisId",
  onDelete: "CASCADE",
});

Municipio.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Municipio.belongsTo(Departamento,{
  as: "Departamento",
  foreignKey: "departamentoId",
  onDelete: "CASCADE",
});

TipoDocumento.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

TipoTelefono.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

TipoSangre.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Acceso.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Rol.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Persona.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Persona.belongsTo(Genero,{
  as: "Genero",
  foreignKey: "generoId",
  onDelete: "CASCADE",
});

Persona.hasMany(Usuario,{
  as: "Usuario",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});

Persona.hasMany(IdentificacionPersona,{
  as: "IdentificacionPersona",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});

Persona.hasMany(DireccionPersona,{
  as: "DireccionPersona",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});

Persona.hasMany(TelefonoPersona,{
  as: "TelefonoPersona",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});

Persona.hasMany(DatoExtraPersona,{
  as: "DatoExtraPersona",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});

IdentificacionPersona.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

IdentificacionPersona.belongsTo(TipoDocumento,{
  as: "TipoDocumento",
  foreignKey: "tipo_documentoId",
  onDelete: "CASCADE",
});

TelefonoPersona.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

TelefonoPersona.belongsTo(TipoTelefono,{
  as: "TipoTelefono",
  foreignKey: "tipo_telefonoId",
  onDelete: "CASCADE",
});

DireccionPersona.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

DireccionPersona.belongsTo(Municipio,{
  as: "Municipio",
  foreignKey: "municipioId",
  onDelete: "CASCADE",
});

DatoExtraPersona.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

DatoExtraPersona.belongsTo(TipoSangre,{
  as: "TipoSangre",
  foreignKey: "tipo_sangreId",
  onDelete: "CASCADE",
});

DatoExtraPersona.belongsTo(EstadoCivil,{
  as: "EstadoCivil",
  foreignKey: "estado_civilId",
  onDelete: "CASCADE",
});

Usuario.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Usuario.belongsTo(Persona,{
  as: "Persona",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});

UsuarioRol.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

UsuarioRol.belongsTo(Rol,{
  as: "Rol",
  foreignKey: "rolId",
  onDelete: "CASCADE",
});

UsuarioRol.belongsTo(Usuario,{
  as: "Usuario",
  foreignKey: "usuarioId",
  onDelete: "CASCADE",
});

MenuAcceso.belongsTo(Menu,{
  as: "Menu",
  foreignKey: "menuId",
  onDelete: "CASCADE",
});

MenuAcceso.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

MenuAcceso.belongsTo(Acceso,{
  as: "Acceso",
  foreignKey: "accesoId",
  onDelete: "CASCADE",
});

RolMenuAcceso.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

RolMenuAcceso.belongsTo(MenuAcceso,{
  as: "MenuAcceso",
  foreignKey: "menu_accesoId",
  onDelete: "CASCADE",
});

Menu.belongsTo(Estado,{
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});

Menu.belongsTo(Menu,{
  as: "MenuPadre",
  foreignKey: "menu_padreId",
  onDelete: "CASCADE",
});

BitacoraCambios.belongsTo(Usuario,{
  as: "Usuario",
  foreignKey: "usuario_crea",
  onDelete: "CASCADE",
});

BitacoraPeticion.belongsTo(Usuario,{
  as: "Usuario",
  foreignKey: "usuario_crea",
  onDelete: "CASCADE",
});

try {
  confiBd.sync({
    force: false,
  }).then(() => {
    const { Estados, Generos, Personas, Usuarios, Paises, Departamentos, Municipios, Menus, Accesos, MenuAccesos, TiposDocumentos, Roles, MenuAccesosRol, TiposTelefonos, EstadosCiviles, TiposSangre, UsuarioRoles, Parametros } = require('./data');
    confiBd.query("select count(*) as total from cat_estado", {
      type: QueryTypes.SELECT
    }).then(async (resultado) => {
      if (resultado[0].total === 0) {
        await Estado.bulkCreate(Estados);
        await Genero.bulkCreate(Generos);
        await Persona.bulkCreate(Personas);
        await Usuario.bulkCreate(Usuarios);
        await Pais.bulkCreate(Paises);
        await Departamento.bulkCreate(Departamentos);
        await Municipio.bulkCreate(Municipios);
        await Menu.bulkCreate(Menus);
        await Acceso.bulkCreate(Accesos);
        await MenuAcceso.bulkCreate(MenuAccesos)
        await TipoDocumento.bulkCreate(TiposDocumentos);
        await Rol.bulkCreate(Roles);
        await RolMenuAcceso.bulkCreate(MenuAccesosRol);
        await TipoTelefono.bulkCreate(TiposTelefonos);
        await EstadoCivil.bulkCreate(EstadosCiviles);
        await TipoSangre.bulkCreate(TiposSangre);
        await UsuarioRol.bulkCreate(UsuarioRoles);
        await Parametro.bulkCreate(Parametros);
      }
    });

    const { listCarrera, listPensum, listCarreraPensum, listGrado, listSeccion, listSalon, listHorario, listCurso, listPensumCurso } = require('./dataColegio');
    confiBd.query("select count(*) as total from cat_carrera", {
      type: QueryTypes.SELECT
    }).then(async (resultado) => {
      if (resultado[0].total === 0) {
        await Carrera.bulkCreate(listCarrera);
        await Pensum.bulkCreate(listPensum);
        await CarreraPensum.bulkCreate(listCarreraPensum);
        await Grado.bulkCreate(listGrado);
        await Seccion.bulkCreate(listSeccion);
        await Salon.bulkCreate(listSalon);
        await Horario.bulkCreate(listHorario);
        await Curso.bulkCreate(listCurso);
        await PensumCurso.bulkCreate(listPensumCurso);
      }
    });

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
  ResetPassWord,
  Parametro,
  bd: confiBd
}


