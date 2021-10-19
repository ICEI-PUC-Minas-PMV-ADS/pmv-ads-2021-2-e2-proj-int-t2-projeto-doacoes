﻿using mapa_do_bem_api.Model;
using mapa_do_bem_api.ViewModel;
using System.Threading.Tasks;

namespace mapa_do_bem_api.Services
{
    public interface IUserService
    {
        Task<ApplicationUser> Cadastrar(UserViewModel model);

        Task<ApplicationUser> SelecionarPorId(string id);
        //Task<ApplicationUser> Login(LoginViewModel model);
    }
}
