using appFalaComigo.ModelsApi;
using appFalaComigo.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace appFalaComigo.Repository.Api
{
    public class ArasaacApi : IArasaacApi
    {

        public Pictogram GetPictogramById(int pictogramId)
        {
            Pictogram pictogram = new Pictogram();

            HttpClient client = new HttpClient
            {
                BaseAddress = new Uri(ApiConstants.Arasaac_Base_Api_Url)
            };

            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));

            string getParameters = string.Format(ApiConstants.Arasaac_Get_Pictograms_By_Id_Api_Url, pictogramId);

            HttpResponseMessage response = client.GetAsync(getParameters).Result;
            if (response.IsSuccessStatusCode)
            {
                pictogram = response.Content.ReadAsAsync<Pictogram>().Result;
            }
            else
            {
                Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }

            client.Dispose();

            return pictogram;
        }

        public IEnumerable<Pictogram> GetSearchPitogram(string searchText)
        {
            IEnumerable<Pictogram> pictogram = new List<Pictogram>();

            HttpClient client = new HttpClient
            {
                BaseAddress = new Uri(ApiConstants.Arasaac_Base_Api_Url)
            };

            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));

            string getParameters = string.Format(ApiConstants.Arasaac_Get_Search_Pictograms_Api_Url, ApiConstants.Arasaac_Api_Language_Pt, searchText);

            HttpResponseMessage response = client.GetAsync(getParameters).Result;
            if (response.IsSuccessStatusCode)
            {
                pictogram = response.Content.ReadAsAsync<IEnumerable<Pictogram>>().Result;
            }
            else
            {
                Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }

            client.Dispose();

            return pictogram;
        }

        public void Dispose()
        {
            this.Dispose();
        }
    }
}