using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.MRR.Core.Interfaces.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<T> Create(T Entity);

        Task<T> GetById(string Id);
        Task<IEnumerable<T>> GetOn(Expression<Func<T,bool>>  expression);
        Task<IEnumerable<T>> GetAll();
        Task<T> Delete(T Entity);
        Task<IEnumerable<T>> DeleteAll(IEnumerable<T> Entities);
        Task<T> Update(T Entity);


    }
}
