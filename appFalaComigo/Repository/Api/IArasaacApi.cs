using appFalaComigo.ModelsApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Repository.Api
{
    public interface IArasaacApi : IDisposable
    {
        Pictogram GetPictogramById(int pictogramId);
        IEnumerable<Pictogram> GetSearchPitogram(string searchText);
    }
}