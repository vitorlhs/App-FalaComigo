using appFalaComigo.Models;
using appFalaComigo.ModelsApi;
using appFalaComigo.Repository;
using appFalaComigo.Repository.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;


namespace appFalaComigo.Controllers
{
    public class FalaComigoController : Controller
    {
        private readonly IUsuarioDb _usuarioDb;
        private readonly IPranchaDb _pranchaDb;
        private readonly ICartaoDb _cartaoDb;
        private readonly IArasaacApi _arasaacApi;

        public FalaComigoController()
        {
            _usuarioDb = new UsuarioDb();
            _pranchaDb = new PranchaDb();
            _cartaoDb = new CartaoDb();
            _arasaacApi = new ArasaacApi();
        }

        // GET: FalaComigo
        public ActionResult Index(int? selectedUserId)
        {
            FalaComigoModel model = new FalaComigoModel
            {
                Users = _usuarioDb.GetUsers()
            };

            model.SelectedUser = model.Users.FirstOrDefault(user => user.UsuarioId == (selectedUserId ?? 1));

            model.Boards = _pranchaDb.GetUserBoards(model.SelectedUser.UsuarioId);

            model.Boards = GetBoardImages(model.Boards);

            return View(model);
        }

        [HttpPost]
        public ActionResult SearchImage(string searchText)
        {
            var pictograms = _arasaacApi.GetSearchPitogram(searchText);
            pictograms = GetPictogramUrls(pictograms);

            return Json(new { pictograms = pictograms }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult CreateBoard(Prancha board)
        {
            try
            {
                _pranchaDb.CreateBoard(board);
            }
            catch (Exception ex)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult CreateCard(Cartao card)
        {
            try
            {
                _cartaoDb.CreateCard(card);
            }
            catch (Exception ex)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true, card.PranchaId }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult DeleteBoard(int boardId)
        {
            try
            {
                _pranchaDb.DeleteBoard(boardId);
            }
            catch (Exception ex)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult DeleteCard(int cardId)
        {
            try
            {
                _cartaoDb.DeleteCard(cardId);
            }
            catch (Exception ex)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPatch]
        public ActionResult EditBoard(Prancha board)
        {
            try
            {
                _pranchaDb.UpdateBoard(board);
            }
            catch (Exception ex)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPatch]
        public ActionResult EditCard(Cartao card)
        {
            try
            {
                _cartaoDb.UpdateCard(card);
            }
            catch (Exception ex)
            {
                return Json(new { success = false }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult RenderCardsView(int selectedBoardId)
        {
            CardsModel model = new CardsModel()
            {
                PranchaId = selectedBoardId
            };

            var cardsList = _cartaoDb.GetBoardCards(selectedBoardId);

            foreach (var card in cardsList)
            {
                var newModelCard = new Card()
                {
                    CardModel = card,
                    ImageUrl = GetImageUrl(card.ArasaacId)
                };

                model.Cards.Add(newModelCard);
            }

            return PartialView("~/Views/Falacomigo/_Cards.cshtml", model);
        }

        private List<Prancha> GetBoardImages(List<Prancha> boards)
        {
            foreach (var board in boards)
            {
                board.BoardPictogram = _arasaacApi.GetPictogramById(board.ArasaacIdImagem);
            }

            return boards;
        }

        private IEnumerable<Pictogram> GetPictogramUrls(IEnumerable<Pictogram> pictograms)
        {
            Parallel.ForEach(pictograms,
                new ParallelOptions { MaxDegreeOfParallelism = 8 },
                pictogram =>
            {
                pictogram.image = _arasaacApi.GetPictogramById(pictogram._id).image;
            });

            return pictograms;
        }

        private string GetImageUrl(int arasaacId)
        {
            var pictogram = _arasaacApi.GetPictogramById(arasaacId);
            return pictogram.image ?? string.Empty;
        }
    }
}