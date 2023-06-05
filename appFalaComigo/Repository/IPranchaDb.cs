using appFalaComigo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Repository
{
    public interface IPranchaDb : IDisposable
    {
        List<Prancha> GetUserBoards(int usuarioId);
        void CreateBoard(Prancha prancha);
        void UpdateBoard(Prancha prancha);
        void DeleteBoard(int boardId);
    }
}