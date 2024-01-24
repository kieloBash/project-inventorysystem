"use server";

import { Role } from "@prisma/client";
import prisma from "../prisma";

export async function createUser({
  name,
  email,
  role,
}: {
  name: string;
  email: string;
  role: Role;
}) {
  try {
    console.log({
      name,
      email,
      role,
    });

    const data = await prisma.user.create({ data: { name, email, role } });

    if (data) return true;
    return false;
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}
export async function checkRole({ email }: { email: string }) {
  try {
    const data = await prisma.user.findFirst({ where: { email } });

    if (data) return data.role;

    return;
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}
