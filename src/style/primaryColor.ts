/**
 * @主色系
 * 1. 蓝色 FOBLUE
 * 2. 红色 FORED
 * 3. 紫色 FOPROP
 * 4. 灰色 FOGREY
 */

/**
 * @const primaryColorSystem
 * @desc 变量定义
 * @property {string} FOBLUE 默认蓝色
 * @property {string} FORED 默认红色
 * @property {string} FOPROP 默认紫色
 * @property {string} FOGREY 默认灰色
 */

type primaryColorSystemType = {
    FOBLUE: string
    FORED: string
    FOPROP: string
    FOGREY: string
}

export const primaryColorSystem: primaryColorSystemType = {
    FOBLUE: '#1976d2',
    FORED: '#fb7676',
    FOPROP: '#977bf8',
    FOGREY: '#D3D3D3'
}
