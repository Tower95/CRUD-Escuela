-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "Genero" TEXT NOT NULL,
    "FechaNacimiento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profesor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "Genero" TEXT NOT NULL,

    CONSTRAINT "Profesor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ProfesorId" INTEGER NOT NULL,

    CONSTRAINT "Grado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumnoGrado" (
    "alumnoId" INTEGER NOT NULL,
    "gradoId" INTEGER NOT NULL,
    "ProfesorId" INTEGER NOT NULL,
    "Seccion" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "AlumnoGrado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Grado" ADD CONSTRAINT "Grado_ProfesorId_fkey" FOREIGN KEY ("ProfesorId") REFERENCES "Profesor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnoGrado" ADD CONSTRAINT "AlumnoGrado_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnoGrado" ADD CONSTRAINT "AlumnoGrado_gradoId_fkey" FOREIGN KEY ("gradoId") REFERENCES "Grado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnoGrado" ADD CONSTRAINT "AlumnoGrado_ProfesorId_fkey" FOREIGN KEY ("ProfesorId") REFERENCES "Profesor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
