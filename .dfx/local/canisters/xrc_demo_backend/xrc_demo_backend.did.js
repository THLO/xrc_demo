export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_exchange_rate' : IDL.Func([IDL.Text], [IDL.Float64], []),
  });
};
export const init = ({ IDL }) => { return []; };
