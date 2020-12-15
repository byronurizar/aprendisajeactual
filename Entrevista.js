const moment = require('moment');
const InfoPdf = (dataAAux) => {
    // if(existeError){
    //   throw error("Ocurrió un error al obtener la información de la entrevista", 401);
    // }
    let jsonReporte = {};
    jsonReporte.codigoCaso = null;
    jsonReporte.nomenclatura = null;
    jsonReporte.grupoFamiliar = null;
    jsonReporte.nombreVictima = null;
    jsonReporte.victimaGeneroHombre = null;
    jsonReporte.victmaGeneroMujer = null;
    jsonReporte.edadHecho = null;
    jsonReporte.grupoSocioLinguistico = null;
    jsonReporte.fechaHecho = null;
    jsonReporte.lugarHecho = null;
    jsonReporte.contextoCasoAbierto = null;
    jsonReporte.contextoCasoCerrado = null;
    jsonReporte.contextoCasoDesapacion = null;
    jsonReporte.lugarRegistro = null;
    jsonReporte.fechaRegistro = null;
    jsonReporte.estatusVictimaFallecido = null;
    jsonReporte.estatusVictimaDesaparecido = null;
    jsonReporte.tipoHechoDesaparicionForzada = null;
    jsonReporte.tipoHechoDesaparicion = null;
    jsonReporte.tipoHechoSecuesto = null;
    jsonReporte.tipoHEchoCentroDeDetencion = null;
    jsonReporte.tipoHechoEjecucionArbitrariaIndividual = null;
    jsonReporte.tipoHechoEjucionArbitrariaColectiva = null;
    jsonReporte.tipoHechoMasacre = null;
    jsonReporte.tipoHechoHechoDeViolencia = null;
    jsonReporte.tipoHechoMuerteEnCombate = null;
    jsonReporte.tipoHechoMuerteIndirecta = null;
    jsonReporte.tipoHechoNDT = null;
    jsonReporte.tipoHechoSI = null;
    jsonReporte.causaMuerteHPAF = null;
    jsonReporte.causaMuerteCortante = null;
    jsonReporte.causaMuerteContundente = null;
    jsonReporte.causaMuerteHambre = null;
    jsonReporte.causaMuerteSusto = null;
    jsonReporte.causaMuerteEnfermedad = null;
    jsonReporte.causaMuerteOtro = null;
    jsonReporte.especificacionOtraCausaMuerte = null;
    jsonReporte.organizacionAcompania = null;
    jsonReporte.nombreInterprete = null;
    jsonReporte.numeroEntrevista = null;
    jsonReporte.autorizadoParaGrabarSi = null;
    jsonReporte.autorizadoParaGrabarNo = null;
    jsonReporte.duracionGrabacion = null;
    jsonReporte.motivoPorElCualNoHuboGrabacion = null;
    jsonReporte.peronsaResponsableEntrevista = null;
    jsonReporte.entrevistadoNombre = null;
    jsonReporte.entrevistadoGeneroHombre = null;
    jsonReporte.entrevistadoGeneroMujer = null;
    jsonReporte.cuiEntrevistado = null;
    jsonReporte.entrevistadoGrupoEtnicoLinguistico = null;
    jsonReporte.entrevistadoFNacimiento = null;
    jsonReporte.entrevistadoEdadActual = null;
    jsonReporte.entrevistadoEdadAlOcurrirHecho = null;
    jsonReporte.entrevistadoLugarNacimiento = null;
    jsonReporte.entrevistadoNombrePadre = null;
    jsonReporte.entrevistadoNombreMadre = null;
    jsonReporte.entrevistadoDireccionActual = null;
    jsonReporte.entrevistadoParentescoConVictima = null;
    jsonReporte.entrevistadoTelefonoCasa = null;
    jsonReporte.entrevistadoCelular = null;
    jsonReporte.entrevistadoCorreo = null;
    jsonReporte.entrevistadoSabeEscribirSi = null;
    jsonReporte.entrevistadoSabeEscribirNo = null;
    jsonReporte.entrevistadoIdioma = null;
    jsonReporte.entrevistadoComunicacionVictima = null;
    jsonReporte.entrevistadoDireccionHechos = null;
    jsonReporte.entrevistadoOtrosFamiliaresDesaparecidosSi = null;
    jsonReporte.entrevistadoOtrosFamiliaresDesaparecidosNo = null;
    jsonReporte.entrevistadoCuandoDesapareccionOtrosFamiliares = null;
    jsonReporte.entrevistadoNombresOtrosFamiliares = null;
    jsonReporte.entrevistadoFamiliaresDesaparecidosHanSidoExhumadosSi = null;
    jsonReporte.entrevistadoFamiliaresDesaparecidosHanSidoExhumadosNo = null;
    jsonReporte.entrevistadoCuandoFueronExhumadosFamiliares = null;
    jsonReporte.entrevistadoNombreLugar = null;
    jsonReporte.entrevistadoHombreSobreviven = null;
    jsonReporte.entrevistadoMujeresSobreviven = null;
    jsonReporte.entrevistadoConoceOtrosEventosSi = null;
    jsonReporte.entrevistadoConoceOtrosEventosNo = null;
    jsonReporte.entrevistadoDonde = null;
    jsonReporte.entrevistadoTieneContactoParaAmpliarInformacion = null;
    jsonReporte.infoGenVicPrimerNombre = null;
    jsonReporte.infoGenVicSegundoNombre = null;
    jsonReporte.infoGenVicPrimerApellido = null;
    jsonReporte.infoGenVicSegundoApellido = null;
    jsonReporte.infoGenVicApellidoCasada = null;
    jsonReporte.infoGenVicNombreFalsoOPSeudonimo = null;
    jsonReporte.infoGenVicFechaNacimiento = null;
    jsonReporte.infoGenVicLugarNacimiento = null;
    jsonReporte.infoGenVicNombrePadre = null;
    jsonReporte.infoGenVicNombreMadre = null;
    jsonReporte.perfilBioVicEdadAlMomentoDesaparecerOFallecer = null;
    jsonReporte.perfilBioVicHombre = null;
    jsonReporte.perfilBioVicMujer = null;
    jsonReporte.perfilBioVicGrupoEtarioNeonato = null;
    jsonReporte.perfilBioVicGrupoEtarioInfante = null;
    jsonReporte.perfilBioVicGrupoEtarioNino = null;
    jsonReporte.perfilBioVicGrupoEtarioAdolecente = null;
    jsonReporte.perfilBioVicGrupoEtarioAdultoJoven = null;
    jsonReporte.perfilBioVicGrupoEtarioAdulto = null;
    jsonReporte.perfilBioVicGrupoEtarioAdultoAnciano = null;
    jsonReporte.perfilBioVicGrupoEtarioSinInformacion = null;
    jsonReporte.perfilBioVicGrupoEtarioNoDeterminado = null;
    jsonReporte.perfilBioVicVicEstaturaMenor145 = null;
    jsonReporte.perfilBioVicVicEstatura145a154 = null;
    jsonReporte.perfilBioVicVicEstatura155a164 = null;
    jsonReporte.perfilBioVicVicEstatura165Mas = null;
    jsonReporte.perfilBioVicEsaturaSegunCedula = null;
    jsonReporte.perfilBioVicLateridadDerecha = null;
    jsonReporte.perfilBioVicLateridadIzquierda = null;
    jsonReporte.perfilBioVicLateridadAmbidiestro = null;
    jsonReporte.perfilBioVicLateridadNS = null;
    jsonReporte.perfilBioVicLateridadNR = null;
    jsonReporte.perfilBioVicCicatricesSi = null;
    jsonReporte.perfilBioVicCicatricesNo = null;
    jsonReporte.perfilBioVicCicatricesDonde = null;
    jsonReporte.perfilBioVicTatuajesSi = null;
    jsonReporte.perfilBioVicTatuajesDonde = null;
    jsonReporte.perfilBioVicCompexionDelgado = null;
    jsonReporte.perfilBioVicCompexionRegular = null;
    jsonReporte.perfilBioVicCompexionFornido = null;
    jsonReporte.perfilBioVicCompexionObeso = null;
    jsonReporte.perfilBioVicCabelloLacio = null;
    jsonReporte.perfilBioVicCabelloOndulado = null;
    jsonReporte.perfilBioVicCabelloCrespo = null;
    jsonReporte.perfilBioVicCabelloColorNegro = null;
    jsonReporte.perfilBioVicCabelloColorCanoso = null;
    jsonReporte.perfilBioVicCabelloColorCastanio = null;
    jsonReporte.perfilBioVicCabelloColorRubio = null;
    jsonReporte.perfilBioVicBigoteSi = null;
    jsonReporte.perfilBioVicBigoteNo = null;
    jsonReporte.perfilBioVicBigoteNS = null;
    jsonReporte.perfilBioVicBigoteNR = null;
    jsonReporte.perfilBioVicBarbaSi = null;
    jsonReporte.perfilBioVicBarbaNo = null;
    jsonReporte.perfilBioVicBarbaNS = null;
    jsonReporte.perfilBioVicBarbaNR = null;
    jsonReporte.perfilBioVicFormRostroRedondo = null;
    jsonReporte.perfilBioVicFormRostroCuadrado = null;
    jsonReporte.perfilBioVicFormRostroAlargado = null;
    jsonReporte.perfilBioVicFormRostroOvalado = null;
    jsonReporte.perfilBioVicUsaLentesSi = null;
    jsonReporte.perfilBioVicUsaLentesNo = null;
    jsonReporte.perfilBioVicFumabaSi = null;
    jsonReporte.perfilBioVicFumabaNo = null;
    jsonReporte.hisEconoEstadoCivil = null;
    jsonReporte.hisEconoNombreConyuge = null;
    jsonReporte.hisEconoEstabaEmbarazadSi = null;
    jsonReporte.hisEconoEstabaEmbarazadNo = null;
    jsonReporte.hisEconoEstabaEmbarazaCuantosMeses = null;
    jsonReporte.hisEconoNumeroHijos = null;
    jsonReporte.hisEconoUltimoDomicilio = null;
    jsonReporte.hisEconoOcupacionHabitual = null;
    jsonReporte.hisEconoOtrasOcupacion = null;
    jsonReporte.hisEconoOcupoCargoPublicoSi = null;
    jsonReporte.hisEconoOcupoCargoPublicoNo = null;
    jsonReporte.hisEconoOcupoCargoPublicoNS = null;
    jsonReporte.hisEconoOcupoCargoPublicoNR = null;
    jsonReporte.hisEconoOcupoCargoPublicoCual = null;
    jsonReporte.hisEconoOcupoCargoPublicoCuando = null;
    jsonReporte.hisEconoGrupoOrgSi = null;
    jsonReporte.hisEconoGrupoOrgNo = null;
    jsonReporte.hisEconoGrupoOrgNS = null;
    jsonReporte.hisEconoGrupoOrgNR = null;
    jsonReporte.hisEconoGrupoOrgCual = null;
    jsonReporte.hisEconoGrupoOrgCuando = null;
    jsonReporte.hisEconoSabiaLeerSi = null;
    jsonReporte.hisEconoSabiaLeerNo = null;
    jsonReporte.hisEconoSabiaLeerNS = null;
    jsonReporte.hisEconoSabiaLeerNR = null;
    jsonReporte.hisEconoSabiaLeerUltGradoEscolar = null;
    jsonReporte.hisEconoSabiaLeerInstEducativa = null;
    jsonReporte.hisEconoPrestoServicioMilitarSi = null;
    jsonReporte.hisEconoPrestoServicioMilitarNo = null;
    jsonReporte.hisEconoPrestoServicioMilitarCuando = null;
    jsonReporte.hisEconoReligion = null;
    jsonReporte.hisEconoGrupoEtnicoLinguistico = null;
    jsonReporte.doctoVicCedulaSi = null;
    jsonReporte.doctoVicCedulaNo = null;
    jsonReporte.doctoVicCedulaNumero = null;
    jsonReporte.doctoVicCarneTrabajoSi = null;
    jsonReporte.doctoVicCarneTrabajoNo = null;
    jsonReporte.doctoVicCarneTrabajoNumero = null;
    jsonReporte.doctoVicLicConducirSi = null;
    jsonReporte.doctoVicLicConducirNo = null;
    jsonReporte.doctoVicLicConducirNo = null;
    jsonReporte.doctoVicPasaporteSi = null;
    jsonReporte.doctoVicPasaporteNo = null;
    jsonReporte.doctoVicPasaporteNumero = null;
    jsonReporte.doctoVicCertNacimientoSi = null;
    jsonReporte.doctoVicCertNacimientoNo = null;
    jsonReporte.doctoVicCertDefuncionLibro = null;
    jsonReporte.doctoVicCertDefuncionActa = null;
    jsonReporte.doctoVicCertDefuncionFolio = null;
    jsonReporte.doctoVicFotografiaSi = null;
    jsonReporte.doctoVicFotografiaNo = null;
    jsonReporte.doctoVicSeAdjuntaFotoSi = null;
    jsonReporte.doctoVicSeAdjuntaFotoNo = null;
    jsonReporte.doctoVicSeAdjuntaFotoEspecifique = null;
    jsonReporte.enferYPadEnfermoSi = null;
    jsonReporte.enferYPadEnfermoNo = null;
    jsonReporte.enferYPadEnfermoNS = null;
    jsonReporte.enferYPadEnfermoNR = null;
    jsonReporte.enferYPadEnfermoMotivoHosptalizacion = null;
    jsonReporte.enferYPadEnfermoEnfermedad = null;
    jsonReporte.enferYPadEnfermoAccidente = null;
    jsonReporte.enferYPadEnfermoParto = null;
    jsonReporte.enferYPadEnfermoCirugia = null;
    jsonReporte.enferYPadEnfermoNS = null;
    jsonReporte.enferYPadEnfermoNR = null;
    jsonReporte.enferYPadNombreHospital = null;
    jsonReporte.enferYPadFechaHospitalizacion = null;
    jsonReporte.enferYPadEspecifique = null;
    jsonReporte.enferYPadAlgunTipoDolorSi = null;
    jsonReporte.enferYPadAlgunTipoDolorNo = null;
    jsonReporte.enferYPadAlgunTipoDolorNS = null;
    jsonReporte.enferYPadAlgunTipoDolorNR = null;
    jsonReporte.enferYPadAlgunTipoDolorCual = null;
    jsonReporte.enferYPadAlgunTipoDolorEspecificaciones = null;
    jsonReporte.enferYPadDiscapacidadSi = null;
    jsonReporte.enferYPadDiscapacidadNo = null;
    jsonReporte.enferYPadDiscapacidadEspecifique = null;
    jsonReporte.traumaAnTraumaSi = null;
    jsonReporte.traumaAnTraumaNo = null;
    jsonReporte.traumaAnTraumaNS = null;
    jsonReporte.traumaAnTraumaNR = null;
    jsonReporte.traumaAnTraumaTipoTrauma = null;
    jsonReporte.traumaAnTraumaCausa = null;
    jsonReporte.traumaAnTraumaAfectaArea = null;
    jsonReporte.traumaAnTraumaCuando = null;
    jsonReporte.hisDentalTrabajoSi = null;
    jsonReporte.hisDentalTrabajoNo = null;
    jsonReporte.hisDentalTrabajoNS = null;
    jsonReporte.hisDentalTrabajoNR = null;
    jsonReporte.hisDentalNombreMedico = null;
    jsonReporte.hisDentalContactoDentista = null;
    jsonReporte.hisDentalFechaTratamiento = null;
    jsonReporte.hisDentalOdontogramaSi = null;
    jsonReporte.hisDentalOdontogramaNo = null;
    jsonReporte.hisDentalDientesParejosSi = null;
    jsonReporte.hisDentalDientesParejosNo = null;
    jsonReporte.hisDentalDientesParejoDescripcion = null;
    jsonReporte.hisDentalDientesSeparacionVisibleSi = null;
    jsonReporte.hisDentalDientesSeparacionVisibleNo = null;
    jsonReporte.hisDentalDientesSeparacionVisibleDescripcion = null;
    jsonReporte.hisDentalDientesSuperNumerarioSi = null;
    jsonReporte.hisDentalDientesSuperNumerarioNo = null;
    jsonReporte.hisDentalDientesSuperNumerarioDescripcion = null;
    jsonReporte.hisDentalDientesAucenciaPiezasExtracSi = null;
    jsonReporte.hisDentalDientesAucenciaPiezasExtracNo = null;
    jsonReporte.hisDentalDientesAucenciaPiezasExtracDescripcion = null;
    jsonReporte.hisDentalDientesFracturaSi = null;
    jsonReporte.hisDentalDientesFracturaNo = null;
    jsonReporte.hisDentalDientesFracturaDescripcion = null;
    jsonReporte.hisDentalDientesManchasSi = null;
    jsonReporte.hisDentalDientesManchasNo = null;
    jsonReporte.hisDentalDientesManchasDescripcion = null;
    jsonReporte.hisDentalDientesCariesSi = null;
    jsonReporte.hisDentalDientesCariesNo = null;
    jsonReporte.hisDentalDientesCariesDescripcion = null;
    jsonReporte.hisDentalDientesDesgasteSi = null;
    jsonReporte.hisDentalDientesDesgasteNo = null;
    jsonReporte.hisDentalDientesDesgasteDescripcion = null;
    jsonReporte.hisDentalDientesDolorSi = null;
    jsonReporte.hisDentalDientesDolorNo = null;
    jsonReporte.hisDentalDientesDolorPermanente = null;
    jsonReporte.hisDentalDientesDolorTemporal = null;
    jsonReporte.hisDentalDientesEnfermedadSi = null;
    jsonReporte.hisDentalDientesEnfermedadNo = null;
    jsonReporte.hisDentalDientesEnfermedadDescripcion = null;
    jsonReporte.hisDentalDientesRellenosSi = null;
    jsonReporte.hisDentalDientesRellenosNo = null;
    jsonReporte.hisDentalDientesRellenosDescripcion = null;
    jsonReporte.hisDentalDientesCoronaSi = null;
    jsonReporte.hisDentalDientesCoronaNo = null;
    jsonReporte.hisDentalDientesCoronaDescripcion = null;
    jsonReporte.hisDentalDientesPuenteSi = null;
    jsonReporte.hisDentalDientesPuenteNo = null;
    jsonReporte.hisDentalDientesPuenteDescripcion = null;
    jsonReporte.hisDentalDientesModDenalSi = null;
    jsonReporte.hisDentalDientesModDenalNo = null;
    jsonReporte.hisDentalDientesModDenalDescripcion = null;
    jsonReporte.hisDentalDientesProtesisSi = null;
    jsonReporte.hisDentalDientesProtesisNo = null;
    jsonReporte.hisDentalDientesProtesisDescripcion = null;
    jsonReporte.hisDentalObservaciones = null;
    jsonReporte.verificarAntecedentesIntimidaciones = null;
    jsonReporte.verificarAntecedentesFecha = null;
    jsonReporte.verificarAntecedentesTestigoHecho = null;
    jsonReporte.verificarAntecedentesDescripcionHecho = null;
    jsonReporte.verificarAntecedentesSindicados = null;
    jsonReporte.verificarAntecedentesLugarDesaparicion = null;
    jsonReporte.verificarAntecedentesHoraDesaparicion = null;
    jsonReporte.verificarAntecedentesPosibleLugarRetencion = null;
    jsonReporte.verificarAntecedentesHechoColectivo = null;
    jsonReporte.verificarAntecedentesHechoIndividual = null;
    jsonReporte.tipoMuertePresencioHechoSi = null;
    jsonReporte.tipoMuertePresencioHechoNo = null;
    jsonReporte.tipoMuerteComoMurioHPAF = null;
    jsonReporte.tipoMuerteComoMurioCortante = null;
    jsonReporte.tipoMuerteComoMurioCortoContundente = null;
    jsonReporte.tipoMuerteComoMurioContundente = null;
    jsonReporte.tipoMuerteOtrosTestigosSi = null;
    jsonReporte.tipoMuerteOtrosTestigosNo = null;
    jsonReporte.tipoMuerteOtrosTestigosNS = null;
    jsonReporte.tipoMuerteOtrosTestigosNR = null;
    jsonReporte.tipoMuerteOtrosTestigosNombre = null;
    jsonReporte.tipoMuerteVictiaDetenidaPrevioMuerteSi = null;
    jsonReporte.tipoMuerteVictiaDetenidaPrevioMuerteNo = null;
    jsonReporte.tipoMuerteVictiaDetenidaPrevioMuerteLugarDetencion = null;
    jsonReporte.tipoMuerteVictiaDetenidaPrevioMuertePorCuantoTiempo = null;
    jsonReporte.tipoMuerteVicSufrioViolenciaSexualSi = null;
    jsonReporte.tipoMuerteVicSufrioViolenciaSexualNo = null;
    jsonReporte.tipoMuerteVicSufrioViolenciaSexualEspecifique = null;
    jsonReporte.tipoMuerteVictimaFallecioSola = null;
    jsonReporte.tipoMuerteVictimaFallecioJuntoAOtrasPersonas = null;
    jsonReporte.tipoMuerteVictimaFallecioNS = null;
    jsonReporte.tipoMuerteVictimaFallecioNR = null;
    jsonReporte.tipoMuerteVictimaFallecioCuantasPersonas = null;
    jsonReporte.tipoMuerteVictimaFallecioNombreDelasPersonas = null;
    jsonReporte.tipoMuerteVicEstuvoImnovilizadaSi = null;
    jsonReporte.tipoMuerteVicEstuvoImnovilizadaNo = null;
    jsonReporte.tipoMuerteVicEstuvoImnovilizadaNS = null;
    jsonReporte.tipoMuerteVicEstuvoImnovilizadaNS = null;
    jsonReporte.tipoMuerteVicEstuvoImnovilizadaEspecifique = null;
    jsonReporte.tipoMuerteCuerposLimpiadosSi = null;
    jsonReporte.tipoMuerteCuerposLimpiadosNo = null;
    jsonReporte.tipoMuerteCuerposLimpiadosNS = null;
    jsonReporte.tipoMuerteCuerposLimpiadosNR = null;
    jsonReporte.tipoMuerteCuerposLimpiadosEspecifique = null;
    jsonReporte.tipoMuerteOfrendasSi = null;
    jsonReporte.tipoMuerteOfrendasNo = null;
    jsonReporte.tipoMuerteOfrendasNS = null;
    jsonReporte.tipoMuerteOfrendasNR = null;
    jsonReporte.tipoMuerteOfrendasEspecifique = null;
    jsonReporte.tipoMuerteMovilizadoLugraOriginalSi = null;
    jsonReporte.tipoMuerteMovilizadoLugraOriginalNo = null;
    jsonReporte.tipoMuerteMovilizadoLugraOriginalNS = null;
    jsonReporte.tipoMuerteMovilizadoLugraOriginalNR = null;
    jsonReporte.tipoMuerteMovilizadoLugraOriginalHaciaDonde = null;
    jsonReporte.inhumacionPresencioSi = null;
    jsonReporte.inhumacionPresencioNo = null;
    jsonReporte.inhumacionPresencioComoSeEntero = null;
    jsonReporte.inhumacionCuantoTiempoDespuesSeEntero = null;
    jsonReporte.inhumacionLugarEntieroMismoLugarHechos = null;
    jsonReporte.inhumacionLugarEntieroDiferenteLugarHecho = null;
    jsonReporte.inhumacionLugarEntieroNombreLugar = null;
    jsonReporte.inhumacionFueronEnterradasOtrasPersonasEnElMismoLugar = null;
    jsonReporte.inhumacionSabeSiOtraPersonaConoceElLugar = null;
    jsonReporte.inhumacionRecuerdaRopaQueLlevaSi = null;
    jsonReporte.inhumacionRecuerdaRopaQueLlevaNo = null;
    jsonReporte.inhumacionTrajeRegionalSi = null;
    jsonReporte.inhumacionTrajeRegionalDequeMunicipio = null;
    jsonReporte.inhumacionTrajeRegionalNo = null;
    jsonReporte.inhumacionPrendaCamisa = null;
    jsonReporte.inhumacionPrendaBlusa = null;
    jsonReporte.inhumacionPrendaPlayera = null;
    jsonReporte.inhumacionPrendaGuipil = null;
    jsonReporte.inhumacionPrendaColor = null;
    jsonReporte.inhumacionPrendaDescripcion = null;
    jsonReporte.inhumacionPrendaPantalon = null;
    jsonReporte.inhumacionPrendaFalda = null;
    jsonReporte.inhumacionPrendaVestido = null;
    jsonReporte.inhumacionPrendaCorte = null;
    jsonReporte.inhumacioncodigoSegunCartilla = null;
    jsonReporte.inhumacioncodigoSegunCartillaDescripcion = null;
    jsonReporte.inhumacionPrendaSueter = null;
    jsonReporte.inhumacionPrendaChumpa = null;
    jsonReporte.inhumacionPrendaSaco = null;
    jsonReporte.inhumacioncodigoSegunCartilla183 = null;
    jsonReporte.inhumacioncodigoSegunCartillaDescripcion184 = null;
    jsonReporte.inhumacionRopaInteriorCamiseta = null;
    jsonReporte.inhumacionRopaInteriorBrasier = null;
    jsonReporte.inhumacionRopaInteriorCalzoncillo = null;
    jsonReporte.inhumacionRopaInteriorCalzon = null;
    jsonReporte.inhumacionRopaInteriorCalcetines = null;
    jsonReporte.inhumacionRopaInteriorCodigoSegunCartilla = null;
    jsonReporte.inhumacionRopaInteriorDescripcion = null;
    jsonReporte.inhumacionSincho = null;
    jsonReporte.inhumacionFaja = null;
    jsonReporte.inhumacionCodigoSegunCartilla189 = null;
    jsonReporte.inhumacionCodigoSegunCartilla189Descripcion = null;
    jsonReporte.inhumacionCalzadoZapatos = null;
    jsonReporte.inhumacionCalzadoBotas = null;
    jsonReporte.inhumacionCalzadoCaites = null;
    jsonReporte.inhumacionCalzadoTenis = null;
    jsonReporte.inhumacionCalzadoCodigoColorSegunCartilla = null;
    jsonReporte.inhumacionCalzadoDescripcion = null;
    jsonReporte.inhumacionObjetosOrnamentalesAnillos = null;
    jsonReporte.inhumacionObjetosOrnamentalesAretes = null;
    jsonReporte.inhumacionObjetosOrnamentalesPulseras = null;
    jsonReporte.inhumacionObjetosOrnamentalesCollares = null;
    jsonReporte.inhumacionObjetosOrnamentalesGanchoDePelo = null;
    jsonReporte.inhumacionObjetosOrnamentalesCodigoColor = null;
    jsonReporte.inhumacionObjetosOrnamentalesDescripcion = null;
    jsonReporte.inhumacionAccesoriosReloj = null;
    jsonReporte.inhumacionAccesoriosSombrero = null;
    jsonReporte.inhumacionAccesoriosGorra = null;
    jsonReporte.inhumacionAccesoriosLlaves = null;
    jsonReporte.inhumacionAccesoriosBilletera = null;
    jsonReporte.inhumacionAccesoriosMonedero = null;
    jsonReporte.inhumacionAccesoriosPanuelo = null;
    jsonReporte.inhumacionAccesoriosCodigoColorSegunCartilla = null;
    jsonReporte.inhumacionAccesoriosDescripcion = null;
    jsonReporte.inhumacionHerramientasYAccesorios = null;
    jsonReporte.accionesLegalesDenunciaSi = null;
    jsonReporte.accionesLegalesDenunciaNo = null;
    jsonReporte.accionesLegalesDenunciaNS = null;
    jsonReporte.accionesLegalesDenunciaNR = null;
    jsonReporte.accionesLegalesEspecifique = null;
    jsonReporte.accionesLegalesOtrasSi = null;
    jsonReporte.accionesLegalesOtrasNo = null;
    jsonReporte.accionesLegalesOtrasEspecifique = null;
    jsonReporte.accionesLegalesInfoPublicadaAnteMediosSi = null;
    jsonReporte.accionesLegalesInfoPublicadaAnteMediosNo = null;
    jsonReporte.accionesLegalesInfoPublicadaAnteMediosNS = null;
    jsonReporte.accionesLegalesInfoPublicadaAnteMediosNR = null;
    jsonReporte.accionesLegalesInfoPublicadaEnqueMedio = null;
    jsonReporte.reconocimientoFueReconocidoEnCampoSi = null;
    jsonReporte.reconocimientoFueReconocidoEnCampoNo = null;
    jsonReporte.reconocimientoFueReconocidoEnCampoNombrePersonaQueReconoce = null;
    jsonReporte.reconocimientoFueReconocidoEnCampoParentesco = null;
    jsonReporte.reconocimientoFueReconocidoEnCampoNumeroOsamenta = null;
    jsonReporte.reconocimientoPorMedioDe = null;
    jsonReporte.infoAdicionalAutorizarFAFGBrindarSuInfoAlMPSi = null;
    jsonReporte.infoAdicionalAutorizarFAFGBrindarSuInfoAlMPNo = null;
    jsonReporte.infoAdicionalAutorizarFAFGPublicarInfoDeSuFamiliarSi = null;
    jsonReporte.infoAdicionalAutorizarFAFGPublicarInfoDeSuFamiliarNo = null;
    jsonReporte.infoAdicionalAutorizarEntrevistadoHistorialVidaSi = null;
    jsonReporte.infoAdicionalAutorizarEntrevistadoHistorialVidaNo = null;
    jsonReporte.abueloMaterno = null;
    jsonReporte.abueloPaterno = null;
    jsonReporte.abuelaMaternas = null;
    jsonReporte.abuelaPaterna = null;
    jsonReporte.listaTiosLineaMaterna = null;
    jsonReporte.listaTiosLineaParterna = null;
    jsonReporte.listaTiasLineaMaterna = null;
    jsonReporte.listaTiasLineaPaternas = null;
    jsonReporte.nombreMadre = null;
    jsonReporte.nombrePadre = null;
    jsonReporte.listaHermanas = null;
    jsonReporte.listaHermanos = null;
    jsonReporte.desaparecidoOFallecido = null;
    jsonReporte.desaparecidoOFallecidoConyuge = null;
    jsonReporte.lisaHijas = null;
    jsonReporte.lisaHijos = null;
    jsonReporte.listaNietos = null;
    jsonReporte.listaNietos2 = null;
    jsonReporte.listaPosiblesDonantes = null;


    let { codigoCaso = null, estadoVictimaId = null, tipoCasoDidId = null, nomenclatura = null, lugarRegistro = null, fechaRegistroIni = null, grupoFamiliar = null, tipoContextoId = null,
        InfoGenVictima = null, PerfilBiolo = null, fechaHechoIni = null, lugarHecho = null, SocioEconoVictima = null, CausaMuerteEnt = null, orgAcompaña = null, nombreInterprete = null, entrevistaAmId = null,
        autGrabar = null, duracionGrabar = null, motivoNoGrabacion = null, Usuario = null, PersonaEntrevistada = null } = dataAAux;
    jsonReporte.codigoCaso = codigoCaso;
    jsonReporte.nomenclatura = nomenclatura;
    jsonReporte.grupoFamiliar = grupoFamiliar;
    jsonReporte.lugarHecho = lugarHecho;
    jsonReporte.organizacionAcompania = orgAcompaña;
    jsonReporte.nombreInterprete = nombreInterprete;
    jsonReporte.numeroEntrevista = entrevistaAmId;
    if (autGrabar === 1) {
        jsonReporte.autorizadoParaGrabarSi = "checked";
        jsonReporte.duracionGrabacion = duracionGrabar;
    } else {
        jsonReporte.autorizadoParaGrabarNo = "checked";
        jsonReporte.motivoPorElCualNoHuboGrabacion = motivoNoGrabacion;
    }

    if (Usuario) {
        let { usuario = null } = Usuario;
        jsonReporte.peronsaResponsableEntrevista = usuario;
    }
    if (tipoContextoId === 1) {
        jsonReporte.contextoCasoAbierto = "checked";
    }
    if (tipoContextoId === 2) {
        jsonReporte.contextoCasoCerrado = "checked";
    }
    if (tipoContextoId === 3) {
        jsonReporte.contextoCasoDesapacion = "checked";
    }
    jsonReporte.lugarRegistro = lugarRegistro;
    if (fechaRegistroIni) {
        jsonReporte.fechaRegistro = moment(fechaRegistroIni).format("DD/MM/YYYY");;
    }

    if (estadoVictimaId === 1) {
        jsonReporte.estatusVictimaFallecido = "checked";
    }

    if (estadoVictimaId === 2) {
        jsonReporte.estatusVictimaDesaparecido = "checked";
    }

    if (tipoCasoDidId === 1) {
        jsonReporte.tipoHechoMuerteIndirecta = "checked";
    }
    if (tipoCasoDidId === 2) {
        jsonReporte.tipoHechoDesaparicion = "checked";
    }
    if (tipoCasoDidId === 3) {
        jsonReporte.tipoHechoMasacre = "checked";
    }
    if (tipoCasoDidId === 4) {
        jsonReporte.tipoHechoEjecucionArbitrariaIndividual = "checked";
    }
    if (tipoCasoDidId === 5) {

    }
    if (tipoCasoDidId === 6) {
        jsonReporte.tipoHechoEjucionArbitrariaColectiva = "checked";
    }
    if (tipoCasoDidId === 7) {

    }
    if (tipoCasoDidId === 8) {

    }
    if (tipoCasoDidId === 9) {

    }


    if (CausaMuerteEnt) {
        CausaMuerteEnt.map(({ causaMuerteId }) => {
            if (causaMuerteId === 1) {
                jsonReporte.causaMuerteHPAF = "checked";
            }
            if (causaMuerteId === 2) {
                jsonReporte.causaMuerteCortante = "checked";
            }
            if (causaMuerteId === 3) {
                jsonReporte.causaMuerteContundente = "checked";
            }
            if (causaMuerteId === 4) {

            }
            if (causaMuerteId === 5) {
                jsonReporte.causaMuerteOtro = "checked";
                jsonReporte.especificacionOtraCausaMuerte = null;
            }
        })
    }


    if (InfoGenVictima) {
        let nombreVictima = "";
        let [victima] = InfoGenVictima;
        let { primerNombre = null, segundoNombre = null, tercerNombre = null, apellidoPaterno = null, apellidoMaterno = null, apellidoCasada = null, fechaNacimiento = null } = victima;
        nombreVictima = primerNombre + " " + segundoNombre + " " + tercerNombre + " " + apellidoPaterno + " " + apellidoMaterno + " " + apellidoCasada;
        nombreVictima = nombreVictima.replace("  ", " ");
        jsonReporte.nombreVictima = nombreVictima;

        if (fechaHechoIni && fechaNacimiento) {
            let edad = moment.duration(moment(fechaNacimiento, 'YYYY-MM-DD').diff(moment(fechaHechoIni, 'YYYY-MM-DD'))).asYears();
            jsonReporte.edadHecho = Math.abs(Number.parseFloat(edad).toFixed(0));
            jsonReporte.fechaHecho = moment(fechaHechoIni).format("DD/MM/YYYY");
        }
    }

    if (PerfilBiolo) {
        let [perfilBiologico] = PerfilBiolo;
        if (perfilBiologico) {
            let { generoId = null } = perfilBiologico;
            if (generoId === 1) {
                jsonReporte.victimaGeneroHombre = "checked"
            }
            if (generoId === 2) {
                jsonReporte.victmaGeneroMujer = "checked";
            }
        }
    }
    if (SocioEconoVictima) {
        let [SocioEco] = SocioEconoVictima;
        if (SocioEco) {
            let { GrupoEtnolinguisticoSE } = SocioEco;
            if (GrupoEtnolinguisticoSE) {
                let { descripcion } = GrupoEtnolinguisticoSE;
                jsonReporte.grupoSocioLinguistico = descripcion;
            }
        }
    }

    if (PersonaEntrevistada) {
        let [Entrevistado] = PersonaEntrevistada;
        if (Entrevistado) {
            jsonReporte.entrevistadoNombre = Entrevistado.nombreEntrevistado;
            if (Entrevistado.generoId === 1) {
                jsonReporte.entrevistadoGeneroHombre = "checked";
            } if (Entrevistado.generoId === 2) {
                jsonReporte.entrevistadoGeneroMujer = "checked";
            }
            jsonReporte.cuiEntrevistado = Entrevistado.cui;
            let { GrupoEtnolinguistico } = Entrevistado;
            if (GrupoEtnolinguistico) {
                let { descripcion } = GrupoEtnolinguistico;
                jsonReporte.entrevistadoGrupoEtnicoLinguistico = descripcion;
            }
            jsonReporte.entrevistadoFNacimiento = moment(Entrevistado.fechaNacimiento).format("DD/MM/YYYY");
            jsonReporte.entrevistadoEdadActual = Entrevistado.edadActual;
            jsonReporte.entrevistadoEdadAlOcurrirHecho = Entrevistado.edadHechoVictima;
            jsonReporte.entrevistadoLugarNacimiento = Entrevistado.lugarNacimiento;
            jsonReporte.entrevistadoNombrePadre = Entrevistado.nombrePadre;
            jsonReporte.entrevistadoNombreMadre = Entrevistado.nombreMadre;
            jsonReporte.entrevistadoDireccionActual = Entrevistado.direccion;
            jsonReporte.entrevistadoTelefonoCasa = Entrevistado.telefonoCasa;
            jsonReporte.entrevistadoCelular = Entrevistado.telefonoCelular;
            jsonReporte.entrevistadoCorreo = Entrevistado.email;
            if (Entrevistado.leerEscribir === 1) {
                jsonReporte.entrevistadosabeescribirsi = "checked";
            }
            if (Entrevistado.leerEscribir === 1) {
                jsonReporte.entrevistadosabeescribirno = "checked";
            }
            if (Entrevistado.existeComunicacion === 1) {
                jsonReporte.entrevistadoComunicacionVictima = "Si";
            }

            if (Entrevistado.existeComunicacion === 0) {
                jsonReporte.entrevistadoComunicacionVictima = "No";
            }
            jsonReporte.entrevistadoDireccionHechos = Entrevistado.lugarHechoEntrev;
            if (Entrevistado.otrosFamDesap === 1) {
                jsonReporte.entrevistadootrosfamiliaresdesaparecidossi = "checked";
            }
            if (Entrevistado.otrosFamDesap === 0) {
                jsonReporte.entrevistadootrosfamiliaresdesaparecidosno = "checked";
            }
            let { FamiliaDesap } = Entrevistado;
            if (FamiliaDesap) {
                jsonReporte.entrevistadoCuandoDesapareccionOtrosFamiliares = FamiliaDesap.length;
                let nombreFamiliaresDesaparecidos = "";
                let cuantoFueronExhumados = "";
                let hanSidoExhumados = 0;
                let lugarExhumacionAux = "";
                FamiliaDesap.map(({ nombreFamiliar, muniExhumacionFamDesap, fechaExhumacion, lugarExhumacion }) => {
                    nombreFamiliaresDesaparecidos += `${nombreFamiliar}<br/>`;
                    if (muniExhumacionFamDesap) {
                        let auxFecha = moment(fechaExhumacion).format("DD/MM/YYYY");
                        cuantoFueronExhumados += `${nombreFamiliar} (${auxFecha})<br/>`
                        lugarExhumacionAux += `${nombreFamiliar} (${lugarExhumacion})<br/>`
                        hanSidoExhumados++;
                    }
                });
                jsonReporte.entrevistadoNombresOtrosFamiliares = nombreFamiliaresDesaparecidos;
                jsonReporte.entrevistadoCuandoFueronExhumadosFamiliares = cuantoFueronExhumados;
                if (hanSidoExhumados > 0) {
                    jsonReporte.entrevistadofamiliaresdesaparecidoshansidoexhumadossi = "checked";
                } else {
                    jsonReporte.entrevistadofamiliaresdesaparecidoshansidoexhumadosno = "checked";
                }
                jsonReporte.entrevistadoNombreLugar = lugarExhumacionAux;
                // jsonReporte.
                // jsonReporte.

            }

            // jsonReporte.entrevistadoParentescoConVictima
            //jsonReporte.entrevistadoIdioma
            //jsonReporte.entrevistadoHombreSobreviven
            //jsonReporte.entrevistadoMujeresSobreviven
            // jsonReporte.entrevistadoconoceotroseventossi
            // jsonReporte.entrevistadoconoceotroseventosno
            //jsonReporte.entrevistadoDonde
            // jsonReporte.entrevistadoTieneContactoParaAmpliarInformacion
        }
    }




    return jsonReporte;

}

module.exports = {
    InfoPdf
}