using appFalaComigo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Repository
{
    public interface IUsuarioDb : IDisposable
    {
        List<Usuario> GetUsers();
        void CreateUser(Usuario usuario);
        void UpdateUser(Usuario usuario);
        void DeleteUser(Usuario usuario);
    }
}