-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lhdmidb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lhdmidb` DEFAULT CHARACTER SET utf8 ;
USE `lhdmidb` ;

-- -----------------------------------------------------
-- Table `lhdmidb`.`secciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`secciones` (
  `idsecciones` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `cantidadobras` DECIMAL(10) NOT NULL,
  PRIMARY KEY (`idsecciones`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`autoras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`autoras` (
  `idautoras` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `redsocial` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(10) NULL,
  PRIMARY KEY (`idautoras`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `imagen` BLOB NOT NULL,
  `precio` DECIMAL(10) NOT NULL,
  `seccion` INT NOT NULL,
  `autora` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idproductos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `registrof` VARCHAR(100) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `foto` VARCHAR(500) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`ventas` (
  `idventas` INT NOT NULL AUTO_INCREMENT,
  `preciototal` DECIMAL(10) NOT NULL,
  `fechacompra` DATETIME NOT NULL,
  `cantidad` DECIMAL(10) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `metodopago` VARCHAR(100) NOT NULL,
  `folio` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idventas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`secciones_has_autoras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`secciones_has_autoras` (
  `secciones_idsecciones` INT NOT NULL,
  `autoras_idautoras` INT NOT NULL,
  `autoras_secciones_idsecciones` INT NOT NULL,
  PRIMARY KEY (`secciones_idsecciones`, `autoras_idautoras`, `autoras_secciones_idsecciones`),
  INDEX `fk_secciones_has_autoras_autoras1_idx` (`autoras_idautoras` ASC, `autoras_secciones_idsecciones` ASC) VISIBLE,
  INDEX `fk_secciones_has_autoras_secciones1_idx` (`secciones_idsecciones` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`productos_has_ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`productos_has_ventas` (
  `productos_idproductos` INT NOT NULL,
  `productos_secciones_idsecciones` INT NOT NULL,
  `ventas_idventas` INT NOT NULL,
  `ventas_usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`productos_idproductos`, `productos_secciones_idsecciones`, `ventas_idventas`, `ventas_usuarios_idusuarios`),
  INDEX `fk_productos_has_ventas_ventas1_idx` (`ventas_idventas` ASC, `ventas_usuarios_idusuarios` ASC) VISIBLE,
  INDEX `fk_productos_has_ventas_productos1_idx` (`productos_idproductos` ASC, `productos_secciones_idsecciones` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lhdmidb`.`autoras_has_ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lhdmidb`.`autoras_has_ventas` (
  `autoras_idautoras` INT NOT NULL,
  `autoras_secciones_idsecciones` INT NOT NULL,
  `ventas_idventas` INT NOT NULL,
  `ventas_usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`autoras_idautoras`, `autoras_secciones_idsecciones`, `ventas_idventas`, `ventas_usuarios_idusuarios`),
  INDEX `fk_autoras_has_ventas_ventas1_idx` (`ventas_idventas` ASC, `ventas_usuarios_idusuarios` ASC) VISIBLE,
  INDEX `fk_autoras_has_ventas_autoras1_idx` (`autoras_idautoras` ASC, `autoras_secciones_idsecciones` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
