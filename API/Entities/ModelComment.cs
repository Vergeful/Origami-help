using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class ModelComment
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ModelId { get; set; }
        public string Date { get; set; }
        public string Comment { get; set; }
    }
}